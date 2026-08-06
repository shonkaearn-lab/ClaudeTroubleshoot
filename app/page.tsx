'use client';

import { useState } from 'react';

const msgs = [
  "When you keep chatting in one conversation, Claude has to re-read everything you both said before answering. Long chats = re-reading thousands of words = burning tokens super fast. That's why your usage disappears. Start a fresh conversation to fix it.",
  "Your long chat makes Claude re-read your entire conversation history with every message. That re-reading costs tokens. Each new prompt wastes more. Start a new chat instead.",
  "Think of it like this: Claude re-reads your whole chat history before responding. A 500-message conversation means re-reading 500 messages per reply. That burns tokens insanely fast. New chat = problem solved.",
  "Long chats don't cost more per message—they cost MASSIVELY more because Claude re-reads everything. Start fresh and tokens will last way longer.",
  "The issue: Claude re-reads your entire chat before answering. Long chats = massive re-reading = tokens vanish. New conversation resets it.",
  "Every response Claude gives re-reads your whole chat history. That's the token burn. Long conversations = tons of re-reading = expensive. Start new.",
  "Claude has to re-read your entire conversation before answering each message. Long chats make this worse and worse. Fresh start = no re-reading bloat.",
  "Long conversation = Claude constantly re-reading everything you said. That re-reading is the token drain. New chat eliminates it.",
  "Here's what's happening: Claude re-reads your chat history with every message. Long chats accumulate, making re-reading bigger. Use new chats frequently.",
  "Your chat forces Claude to re-read thousands of previous words per response. That's token usage. Long threads = constant re-reading = expensive. Start over.",
  "Claude re-reads your whole conversation before responding. Long chats = more re-reading = more tokens burned. New chat stops the waste.",
  "Each message makes Claude re-read your entire chat. Long conversations get bigger and bigger. Re-reading gets more expensive. Time for a new chat.",
  "The real issue: Claude re-reads everything before answering. Your long chat means re-reading tons of text per reply. Switch to new chat.",
  "Claude re-reads your whole chat before each response. Long conversations = expensive re-reading = tokens drain fast. Fresh start fixes it.",
  "Long chat = Claude re-reads massive amounts of text per message = token burn. New conversation eliminates this re-reading waste.",
  "Your chat keeps getting re-read by Claude. Long conversations = tons of re-reading = high cost. Start a new one to save tokens.",
  "Claude re-reads your entire conversation before answering. Old long chats = expensive re-reading. New chat = no bloat = lower cost.",
  "Here's why tokens disappear: Claude re-reads your whole chat before responding. Long chats accumulate, making this re-reading huge. Use new chats.",
  "Long conversations force Claude to re-read everything. That's the token drain. Fresh chat = no re-reading bloat = saves tokens.",
  "Claude must re-read your chat history for every response. Long chats = bigger history = more re-reading = tokens burn. Start new.",
  "Your long chat gets re-read constantly. That re-reading is expensive. New conversation = no accumulated re-reading = token savings.",
  "Claude re-reads your whole conversation before answering. Long chats = tons of re-reading per message = tokens vanish. New chat saves.",
  "The culprit: Claude re-reading your entire chat with every response. Long conversations make this massive. Start fresh to reset.",
  "Long chat = Claude re-reads everything = token burn. Short chats = less re-reading = less token use. Start new conversations.",
  "Claude re-reads your chat before responding. Long chats = bigger re-reading = more token cost. New chat = smaller re-reading = cheaper.",
  "Your chat requires Claude to re-read everything. Long conversations = expensive re-reading overhead. Fresh start eliminates it.",
  "Here's it: Claude re-reads your entire chat. Long conversations = massive re-reading = token drain. New chat = no re-reading bloat.",
  "Long chats cost more because Claude re-reads everything each turn. That re-reading adds up. Use new chats to avoid it.",
  "Claude re-reads your whole conversation before each message. Long chats = tons of re-reading = tokens burn fast. New conversation.",
  "Your long chat forces Claude to re-read thousands of words per response. That's the token usage. Start a fresh one.",
  "Claude re-reads everything before answering. Long chats = more to re-read = more expensive. New chat = less to re-read = cheaper.",
  "Long conversation = Claude constantly re-reading your history = token burn. New chat = fresh start = no re-reading waste.",
  "Claude must re-read your chat to answer. Long chats = expensive re-reading. Short chats = cheap re-reading. Start new.",
  "Your chat gets re-read by Claude every turn. Long conversations = tons of re-reading = tokens disappear. Fresh start saves.",
  "Long chats make Claude re-read more and more. That re-reading = token cost. New conversation = minimal re-reading = savings.",
  "Claude re-reads your entire conversation before responding. Long chats = expensive. New chats = cheap. Use new ones.",
  "Here's why you're burning tokens: Claude re-reads your whole chat. Long chats = massive re-reading = expensive. Start fresh.",
  "Long chat = Claude re-reads everything = token consumption. New chat = less to re-read = tokens last longer.",
  "Claude re-reads your chat before each reply. Long conversations accumulate, making re-reading expensive. Switch to new chats.",
  "Your long conversation gets re-read constantly. That re-reading is expensive. New chat = no re-reading overhead = saves tokens.",
  "Claude re-reads your entire history before answering. Long chats = tons of re-reading = high cost. New conversation fixes.",
  "Long chats force Claude to re-read thousands of words per message. That re-reading burns tokens fast. Start a new chat.",
  "Claude re-reads your whole chat. Long conversations = bigger re-reading = more tokens burned. Use new chats.",
  "Your chat requires Claude to re-read everything. Long chats = expensive re-reading cost. Fresh start = no re-reading = saves.",
  "Long conversation = Claude re-reads entire history = token burn. New chat = minimal re-reading = token savings.",
  "Claude must re-read your chat before responding. Long conversations = costly re-reading. Start fresh to reset the cost.",
  "Here's the deal: Claude re-reads your whole conversation. Long chats = massive re-reading = tokens vanish. New chat.",
  "Long chat = Claude constantly re-reading = token drain. New chat = less re-reading = tokens last longer.",
  "Claude re-reads your chat history before each message. Long conversations = expensive re-reading overhead. Use new chats.",
  "Your long chat accumulates and gets re-read. That re-reading = expensive. New conversation = no accumulated re-reading.",
  "Claude re-reads everything before answering. Long chats = tons of re-reading = burn tokens. New chat = less re-reading.",
  "Long conversation forces Claude to re-read thousands of words. That's token cost. Start fresh to avoid it.",
  "Claude re-reads your whole chat per response. Long chats = more re-reading = higher token usage. New chat = less usage.",
  "Your chat gets re-read by Claude constantly. Long conversations = expensive re-reading. Fresh start = no re-reading waste.",
  "Long chats make Claude re-read more text per message. That re-reading = token burn. New conversation = savings.",
  "Claude re-reads your entire conversation before responding. Long chats = expensive. Short chats = cheap. Start new.",
  "Here's what costs tokens: Claude re-reading your whole chat. Long conversations = massive re-reading cost. Use new chats.",
  "Long chat = Claude re-reads everything = expensive. New chat = minimal re-reading = cheap. Start fresh.",
  "Claude must re-read your chat history. Long conversations accumulate, making re-reading huge. Start new to reset.",
  "Your long conversation gets re-read repeatedly. That re-reading = token consumption. New chat = no re-reading bloat.",
  "Claude re-reads your entire chat before each reply. Long chats = tons of re-reading = tokens disappear. Fresh start.",
  "Long chats cost more because Claude re-reads everything. That re-reading adds up fast. New chat = problem solved.",
  "Claude re-reads your whole conversation. Long chats = expensive re-reading. New conversations = cheap re-reading.",
  "Your chat requires constant re-reading by Claude. Long conversations = massive re-reading = high token cost. Start new.",
  "Here's it simply: Claude re-reads your chat. Long ones cost more. New ones cost less. Start fresh.",
  "Long conversation = Claude re-reading massive history = token burn. New chat = minimal re-reading = saves tokens.",
  "Claude re-reads your whole chat before answering. Long chats = expensive. Start fresh to avoid token waste.",
  "Your long chat forces Claude to constantly re-read. That's expensive. New conversation = no re-reading accumulation.",
  "Claude re-reads your entire conversation per message. Long chats = token burn from re-reading. Use new chats.",
  "Long chats make Claude re-read thousands of words. That re-reading = token usage. New chat = minimal cost.",
  "Claude must re-read your chat. Long conversations = more re-reading = more tokens burned. Start fresh.",
  "Your conversation gets re-read by Claude. Long chats = lots of re-reading = expensive. New chat = cheap.",
  "Long chat = Claude re-reading everything = expensive. Fresh start = less re-reading = tokens last longer.",
  "Claude re-reads your chat history before each reply. Long ones = costly re-reading. New ones = cheap re-reading.",
  "Here's why tokens vanish: Claude re-reads your whole chat. Long chats = tons of re-reading = token burn. Start new.",
  "Long conversation = Claude constantly re-reading = token cost. New chat = fresh start = no re-reading waste.",
  "Claude re-reads your entire chat before responding. Long chats = expensive re-reading overhead. Use new conversations.",
  "Your long chat accumulates re-reading cost. That's token burn. New conversation = no accumulated cost = saves.",
  "Claude re-reads your whole conversation. Long chats = more re-reading = higher cost. New chats = lower cost.",
  "Long chats make Claude re-read thousands of messages. That re-reading = expensive. Start fresh to reset.",
  "Claude must re-read your chat. Long conversations = massive re-reading = tokens disappear. New chat = savings.",
  "Your chat gets re-read by Claude. Long ones = expensive re-reading. New ones = cheap re-reading. Start over.",
  "Long conversation = expensive re-reading by Claude. New chat = cheap re-reading. Switch to save tokens.",
  "Claude re-reads your entire history. Long chats = tons of re-reading = token burn. Fresh start = problem solved.",
];

const thinking = [
  'Analyzing context window...',
  'Scanning conversation history...',
  'Calculating token usage...',
  'Compressing chat logs...',
  'Assessing message density...',
  'Processing context chains...',
  'Evaluating re-read overhead...',
  'Finalizing diagnosis...',
];

export default function Home() {
  const [inp, setInp] = useState('');
  const [res, setRes] = useState('');
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [thinkIdx, setThinkIdx] = useState(0);

  const troubleshoot = () => {
    setLoading(true);
    setThinkIdx(0);
    setShow(true);

    let idx = 0;
    const interval = setInterval(() => {
      idx += 1;
      if (idx >= thinking.length) {
        clearInterval(interval);
        const m = msgs[Math.floor(Math.random() * msgs.length)];
        setRes(m);
        setLoading(false);
      } else {
        setThinkIdx(idx);
      }
    }, 1000);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') troubleshoot();
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div style={{ maxWidth: '600px', width: '100%' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px', fontWeight: '600' }}>
          Claude Troubleshoot
        </h1>

        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Describe your Claude issue..."
            value={inp}
            onChange={(e) => setInp(e.target.value)}
            onKeyDown={handleKey}
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ccc',
              fontSize: '16px',
              fontFamily: 'inherit',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <button
          onClick={troubleshoot}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          Troubleshoot
        </button>

        {show && (
          <div
            style={{
              marginTop: '30px',
              padding: '20px',
              border: '1px solid #000',
              backgroundColor: '#f5f5f5',
              minHeight: '60px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <p style={{ margin: '0', lineHeight: '1.6', fontSize: '16px', color: loading ? '#666' : '#000' }}>
              {loading ? thinking[thinkIdx] : res}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
