'use client';

import React, { useEffect, useRef, useState } from 'react';

const WEBHOOK_URL = 'https://cognaratraining.app.n8n.cloud/webhook/aa8338db-40b3-49a3-9461-77811ab144b1/chat';

function generateSessionId() {
  return 'session_' + Math.random().toString(36).slice(2, 12);
}

function parseResponseText(text) {
  if (!text) return null;
  // try JSON
  try {
    const j = JSON.parse(text);
    const keys = ['output', 'text', 'message', 'response'];
    for (const k of keys) {
      if (j[k]) return j[k];
    }
    // try deep search
    if (Array.isArray(j)) {
      return j.map((x) => (typeof x === 'string' ? x : JSON.stringify(x))).join('\n');
    }
  } catch (e) {
    // not json
  }
  // fallback: split lines and look for type:item
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  if (lines.length) return lines.join('\n');
  return null;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [sessionId] = useState(generateSessionId());
  const [loading, setLoading] = useState(false);
  const messagesRef = useRef(null);
  const [seen, setSeen] = useState(false);

  function formatMessageToNodes(text) {
    if (!text) return null;
    const nodes = [];
    const regex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s]+)/g;
    let lastIndex = 0;
    let match;
    while ((match = regex.exec(text)) !== null) {
      const idx = match.index;
      if (idx > lastIndex) {
        nodes.push(text.slice(lastIndex, idx));
      }
      if (match[2] && match[1]) {
        // markdown link [label](url) -> styled button link
        nodes.push(
          <a
            key={`a-${idx}`}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="chat-link-button"
            role="button"
          >
            {match[1]}
          </a>,
        );
      } else if (match[3]) {
        // plain url -> styled button link
        nodes.push(
          <a
            key={`u-${idx}`}
            href={match[3]}
            target="_blank"
            rel="noopener noreferrer"
            className="chat-link-button"
            role="button"
          >
            {match[3]}
          </a>,
        );
      }
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) {
      nodes.push(text.slice(lastIndex));
    }
    // replace line breaks with <br /> nodes
    return nodes.flatMap((n, i) => {
      if (typeof n !== 'string') return [n];
      return n.split(/\r?\n/).reduce((acc, part, idx2, arr) => {
        acc.push(part);
        if (idx2 < arr.length - 1) acc.push(<br key={`br-${i}-${idx2}`} />);
        return acc;
      }, []);
    });
  }

  useEffect(() => {
    // welcome messages
    setMessages([
      { id: 'w1', from: 'bot', text: 'Hello! I am the Taliana AI Assistant 👋' },
      {
        id: 'w2',
        from: 'bot',
        text: 'I can help with IR advice, compliance questions, or book a discovery call with Shaun.',
      },
    ]);

    // check if user has opened chat before
    try {
      const v = localStorage.getItem('taliana_chat_seen');
      setSeen(Boolean(v));
    } catch (e) {
      setSeen(false);
    }
  }, []);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, open]);

  async function sendMessage() {
    const text = input.trim();
    if (!text) return;
    const userMsg = { id: 'u' + Date.now(), from: 'user', text };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const resp = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chatInput: text, sessionId, action: 'sendMessage' }),
      });

      const rawText = await resp.text();

      let finalReply = '';

      // Try direct JSON parse first
      try {
        const json = JSON.parse(rawText);
        finalReply = json.output || json.text || json.message || json.response || '';
      } catch (e) {
        // Handle n8n streaming chunks split by newline
        const lines = rawText.split('\n').filter((l) => l.trim());
        for (const line of lines) {
          try {
            const chunk = JSON.parse(line);
            if (chunk.type === 'item' && chunk.content) {
              finalReply += chunk.content;
            }
            if (chunk.type === 'message' && chunk.content) {
              finalReply = chunk.content;
            }
          } catch (err) {
            // skip unparseable lines
          }
        }
      }

      if (!finalReply) {
        finalReply = 'Thanks for your message! How can I help you further?';
      }

      setMessages((m) => [...m, { id: 'b' + Date.now(), from: 'bot', text: finalReply.trim() }]);
    } catch (e) {
      setMessages((m) => [...m, { id: 'err' + Date.now(), from: 'bot', text: 'Thanks for your message! How can I help you further?' }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div>
      {/* Bubble */}
      <button
        aria-label="Open chat"
        onClick={() => {
          const willOpen = !open;
          setOpen(willOpen);
          if (willOpen) {
            try {
              localStorage.setItem('taliana_chat_seen', '1');
            } catch (e) {}
            setSeen(true);
          }
        }}
        className="chat-bubble"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M21 15a2 2 0 0 1-2 2H7l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="#fff" />
        </svg>
        {!seen && !open && <span className="chat-bubble__dot" aria-hidden />}
      </button>

      {/* Chat window (always mounted to allow animations) */}
      <div
        role="dialog"
        aria-label="Chat window"
        className={`chat-window ${open ? 'chat-window--open' : 'chat-window--closed'}`}
      >
        <div className="chat-window__header">
          <div>
            <div className="chat-title">Taliana Assistant</div>
            <div className="chat-sub">Ask me about IR, compliance or book a discovery call</div>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Close chat" className="chat-close">
            ×
          </button>
        </div>

        <div className="chat-window__messages" ref={messagesRef}>
          {messages.map((m) => (
            <div key={m.id} className={`chat-msg chat-msg--${m.from}`}>
              <div className="chat-msg__bubble">
                {formatMessageToNodes(m.text)}
              </div>
            </div>
          ))}

          {loading && (
            <div className="chat-msg chat-msg--bot">
              <div className="chat-msg__bubble chat-typing">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
            </div>
          )}
        </div>

        <div className="chat-window__disclaimer">
          Shaun Taliana is an IR Advisor, not a legal practitioner. This chat does not constitute legal advice.
        </div>

        <div className="chat-window__input">
          <textarea
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage} disabled={loading || !input.trim()} className="chat-send">
            {loading ? <span className="send-spinner" aria-hidden /> : 'Send'}
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes dot {
          0% { opacity: 0.2; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-4px); }
          100% { opacity: 0.2; transform: translateY(0); }
        }
        .chat-bubble {
          position: fixed;
          right: 24px;
          bottom: 24px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #1a1a2e;
          color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
          border: none;
          z-index: 9999;
          cursor: pointer;
        }

        .chat-bubble__dot {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 12px;
          height: 12px;
          background: #e94242;
          border-radius: 50%;
          box-shadow: 0 0 0 rgba(233,66,66,0.6);
          animation: pulse 1.6s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(233,66,66,0.6); }
          70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(233,66,66,0); }
          100% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(233,66,66,0); }
        }

        .chat-window {
          position: fixed;
          right: 24px;
          bottom: 24px;
          width: 370px;
          height: 520px;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 9998;
          background: #fff;
          transform: translateY(20px);
          opacity: 0;
          pointer-events: none;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .chat-window--open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        .chat-window__header {
          background: #1a1a2e;
          color: #fff;
          padding: 14px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 16px 16px 0 0;
        }

        .chat-title { font-weight: 700; }
        .chat-sub { font-size: 12px; opacity: 0.9; }

        .chat-close { background: transparent; border: none; color: #fff; font-size: 18px; cursor: pointer; }

        .chat-window__messages { background: #f9f9f9; padding: 16px; flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; }

        .chat-msg { display: flex; }
        .chat-msg--bot { justify-content: flex-start; }
        .chat-msg--user { justify-content: flex-end; }

        .chat-msg__bubble { max-width: 78%; padding: 10px 12px; }
        .chat-msg--bot .chat-msg__bubble { background: #fff; border: 1px solid #eee; border-radius: 4px 12px 12px 12px; color: #111; }
        .chat-msg--user .chat-msg__bubble { background: #1a1a2e; color: #fff; border-radius: 12px 4px 12px 12px; }

        .chat-typing { display: inline-flex; gap: 6px; align-items: center; }
        .chat-typing .dot { width: 8px; height: 8px; background: #ddd; border-radius: 50%; display: inline-block; animation: blink 1s infinite; }
        .chat-typing .dot:nth-child(2) { animation-delay: 0.15s }
        .chat-typing .dot:nth-child(3) { animation-delay: 0.3s }
        @keyframes blink { 0% { opacity: 0.25 } 50% { opacity: 1 } 100% { opacity: 0.25 } }

        .chat-window__disclaimer {
          font-size: 12px;
          color: #6b6b6b;
          padding: 10px 16px;
          border-top: 1px solid #f0f0f0;
          background: #fafafa;
        }

        .chat-link-button {
          display: inline-block;
          background: #1a1a2e;
          color: #fff;
          padding: 8px 12px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          margin: 6px 0;
        }
        .chat-link-button:hover { background: #2d2d4e; }

        .chat-window__input { padding: 10px; border-top: 1px solid #eee; display: flex; gap: 8px; align-items: center; background: #fff; }
        .chat-window__input textarea { flex: 1; resize: none; padding: 10px 12px; border-radius: 8px; border: 1px solid #eee; font-family: inherit; }
        .chat-send { background: #1a1a2e; color: #fff; border: none; padding: 8px 12px; border-radius: 8px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; }

        .send-spinner { width: 16px; height: 16px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.25); border-top-color: #fff; animation: spin 0.8s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        @media (max-width: 480px) {
          .chat-window { right: 16px; width: calc(100vw - 32px); }
          .chat-bubble { right: 16px; bottom: 16px; }
        }
      `}</style>
    </div>
  );
}
