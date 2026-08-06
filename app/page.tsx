'use client';

import { useState } from 'react';

const msgs = [
  'Long chats re-read everything. Each message burns tokens. Start fresh.',
  'Every message re-reads all previous text. Long chats = token drain. New conversation fixes it.',
  'Your old chat re-reads itself. That's why tokens burn fast. Fresh start resets context.',
  'Long thread = re-reading entire history per message. Use new chat to stop the bleed.',
  'Each response re-reads your whole chat. Long convos drain tokens quickly. Start over.',
  'Re-reading entire conversation each turn. Long threads waste tokens. New chat needed.',
  'Old chat keeps re-reading itself. That's massive token usage. Start a fresh one.',
  'Long conversation = re-reading hundreds of messages per response. Switch to new chat.',
  'Each new message re-reads entire chat history. Long threads hemorrhage tokens. Reset.',
  'Your chat history is bloated. Re-reading it constantly burns tokens. New conversation.',
  'Long chats force re-reading all context. Tokens drain fast. Start fresh chat.',
  'Re-reading thousands of tokens per response. Long chats do that. New chat stops it.',
  'Every turn re-reads entire thread. Long convos = token waste. New chat needed.',
  'Long chat = constant re-reading of previous messages = token consumption. Start new.',
  'Re-reading entire history with each prompt. That's why long chats feel slow. Fresh start.',
  'Your chat keeps re-reading itself. Long threads burn through tokens. New convo fixes it.',
  'Each response re-reads all previous context. Long chats drain tokens fast. Reset now.',
  'Long conversation history gets re-read constantly. Massive token usage. Start fresh.',
  'Re-reading your entire chat per message. Long threads = fast token burn. New chat.',
  'Every prompt re-reads the whole thread. Long chats waste tokens. Switch to new one.',
  'Old chat re-reading itself repeatedly. Long conversations drain usage. Start over.',
  'Long thread = re-reading thousands of tokens per turn. New chat stops the drain.',
  'Each message re-reads entire history. That's token consumption. Long chats = problem.',
  'Re-reading conversation constantly. Long chats burn tokens fast. Start a new one.',
  'Your long chat re-reads itself. That's the token drain. Fresh conversation needed.',
  'Every turn re-reads entire context. Long chats = massive token waste. New chat.',
  'Long conversation history re-read repeatedly. Tokens drain. Start fresh conversation.',
  'Re-reading thousands of tokens per response in long chats. New chat is the fix.',
  'Each message re-reads your whole chat. Long threads consume tokens fast. Reset.',
  'Long chat = constant re-reading = high token usage. New conversation stops it.',
  'Re-reading entire previous conversation each turn. Long chats drain tokens. Fresh start.',
  'Your old chat keeps re-reading itself. That burns tokens. New chat is the answer.',
  'Long thread = re-reading bloated context = token hemorrhage. Start fresh.',
  'Every response re-reads entire history. Long chats = token drain. New one fixes.',
  'Re-reading conversation repeatedly. Long chats waste tokens. New chat resets it.',
  'Long conversation history re-read per message. Token burn. Start a new chat.',
  'Each prompt re-reads thousands of previous tokens. Long chats do that. Fresh start.',
  'Your long chat re-reads itself constantly. That burns your tokens. New conversation.',
  'Re-reading entire thread per turn. Long chats = massive token consumption. Reset now.',
  'Long chat = context re-reading = tokens drain fast. Start a new conversation.',
  'Every message re-reads bloated history. Long threads = token waste. New chat.',
  'Re-reading your whole chat each turn. That's why long chats feel expensive. Start over.',
  'Long conversation constantly re-read. Tokens vanish. Fresh chat stops the bleed.',
  'Each turn re-reads entire previous context. Long chats burn tokens. New one needed.',
  'Re-reading thousands of tokens repeatedly. Long threads do this. Switch to new chat.',
  'Long chat = re-reading everything = high token usage per prompt. Start fresh.',
  'Your chat re-reads itself. Long conversations = token drain. New chat fixes.',
  'Re-reading entire history with each message. Long chats = consumption. Fresh start.',
  'Long thread = constant context re-reading = fast token burn. New chat needed.',
  'Every prompt re-reads your whole conversation. Long chats waste tokens. Reset.',
  'Re-reading conversation repeatedly per turn. Long chats = token problem. Start new.',
  'Long chat history re-read constantly. Massive token waste. New conversation now.',
  'Each message re-reads entire context. Long threads = fast token drain. Fresh start.',
  'Re-reading bloated chat history. Long conversations burn tokens. New chat stops it.',
  'Long conversation = context re-read per message = token consumption. Start over.',
  'Your old chat keeps re-reading. That's the token drain. Fresh chat needed.',
  'Re-reading thousands of tokens per response. Long chats do this. New conversation.',
  'Long thread = re-reading entire history = expensive. Start a new chat.',
  'Every turn re-reads all previous messages. Long chats = token waste. New one.',
  'Re-reading your conversation repeatedly. Long chats burn tokens fast. Fresh start.',
  'Long chat history constantly re-read. Tokens drain. Start a new conversation.',
  'Each response re-reads entire context. Long threads = high token usage. Reset now.',
  'Re-reading whole chat per prompt. Long conversations = token problem. New chat.',
  'Long conversation = constant re-reading = tokens disappear. Start fresh.',
  'Your chat re-reads itself each turn. Long threads = expensive. New conversation.',
  'Re-reading thousands of tokens repeatedly. Long chats = problem. Switch chat.',
  'Long thread = context re-read per message = fast token burn. New chat fixes.',
  'Every message re-reads bloated history. Long chats drain tokens. Start over.',
  'Re-reading entire conversation constantly. Long chats = consumption. Fresh start.',
  'Long chat = re-reading context = high token usage. New conversation stops it.',
  'Your old chat keeps re-reading itself. That burns tokens. New chat needed.',
  'Re-reading history per turn. Long chats = token waste. Start a new one.',
  'Long conversation constantly re-read. That's the drain. Fresh chat fixes.',
  'Each prompt re-reads your whole thread. Long chats = expensive. New chat now.',
  'Re-reading thousands of tokens repeatedly. Long conversations = problem. Reset.',
  'Long thread = re-reading everything = tokens vanish. Start a new chat.',
  'Your chat re-reads itself. Long conversations = usage drain. Fresh start.',
  'Re-reading bloated context per message. Long chats burn tokens. New conversation.',
  'Long chat history re-read constantly. Massive consumption. Start fresh chat.',
  'Every turn re-reads entire context. Long threads = token problem. New one needed.',
  'Re-reading your conversation repeatedly per turn. Long chats = expense. Fresh start.',
  'Long conversation = context re-read = high token burn. Start over now.',
  'Your old chat keeps re-reading. Tokens drain fast. New chat stops it.',
  'Re-reading entire thread per prompt. Long chats = expensive. New conversation.',
];

export default function Home() {
  const [inp, setInp] = useState('');
  const [res, setRes] = useState('');
  const [show, setShow] = useState(false);

  const troubleshoot = () => {
    const m = msgs[Math.floor(Math.random() * msgs.length)];
    setRes(m);
    setShow(true);
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
            <p style={{ margin: '0', lineHeight: '1.6', fontSize: '16px' }}>
              {res}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
