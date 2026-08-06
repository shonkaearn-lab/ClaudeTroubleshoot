'use client';

import { useState } from 'react';

const msgs = [
  "When you keep chatting in one conversation, Claude must re-read your entire conversation history before generating each response. Long chats accumulate thousands of words that get re-read repeatedly, consuming tokens at an accelerated rate. This is why your usage disappears so quickly. Starting a fresh conversation eliminates this accumulated re-reading overhead.",
  "Your extended conversation history requires Claude to re-read everything before generating each response. This accumulated re-reading of thousands of words consumes tokens at an exponential rate with each new message. Starting a fresh conversation immediately resolves this issue by eliminating the re-reading burden.",
  "Consider this explanation of the mechanism: Claude re-reads your complete conversation history before responding. A conversation containing 500 messages means re-reading all 500 prior messages with every single response. This accumulation dramatically increases token consumption. Beginning a new conversation solves this problem.",
  "The cost structure is not linear. Long conversations do not cost proportionally more per message. Rather, they cost substantially more because Claude must re-read the entire conversation history before each response. Starting a fresh conversation significantly extends your token availability.",
  "The core issue is that Claude re-reads your complete conversation before answering each question. Long chat histories accumulate extensive re-reading overhead that consumes tokens rapidly. A new conversation eliminates this accumulated re-reading cost.",
  "Every response Claude generates requires re-reading your entire conversation history. This re-reading process is what consumes tokens. Extended conversations compound this effect exponentially. Start a new conversation to resolve the token consumption issue.",
  "Claude must re-read your entire conversation before answering each message you send. Long conversations significantly worsen this problem because the re-reading burden grows continuously. A fresh conversation eliminates this re-reading accumulation.",
  "Long conversations result in Claude constantly re-reading everything you have said. This continuous re-reading represents the primary source of token consumption. A new conversation effectively eliminates this re-reading drain.",
  "The mechanism behind your token consumption is as follows: Claude re-reads your conversation history before each message. Long conversations accumulate extensive re-reading requirements. Using new conversations frequently prevents this accumulation.",
  "Your conversation forces Claude to re-read thousands of words before each response. This re-reading constitutes the primary token usage. Extended conversations compound this effect continuously. Starting over provides immediate relief.",
  "Claude re-reads your entire conversation before generating responses. Long conversations result in significantly more re-reading and therefore more tokens consumed. A new conversation stops this waste effectively.",
  "Each message you send causes Claude to re-read your entire conversation. As conversations grow longer, the re-reading burden increases substantially. Eventually, re-reading dominates your token consumption. Start a new conversation to break this cycle.",
  "The underlying issue is that Claude re-reads everything before answering. Your long conversation means re-reading extensive amounts of text with every reply. Switching to a new conversation resolves this immediately.",
  "Claude re-reads your complete conversation before each response. Long conversations result in expensive re-reading overhead that drains tokens rapidly. Starting fresh restores normal token efficiency.",
  "Long conversations cause Claude to re-read massive amounts of text per message. This re-reading pattern represents your primary token consumption. A new conversation eliminates this re-reading burden entirely.",
  "Your conversation gets re-read repeatedly by Claude. Long conversations accumulate substantial re-reading costs. Starting a new conversation saves tokens by avoiding this accumulated re-reading.",
  "Claude re-reads your entire conversation before answering. Old long conversations result in particularly expensive re-reading. New conversations contain no prior re-reading overhead and therefore cost significantly less.",
  "Here is why your tokens disappear so quickly: Claude re-reads your complete conversation before each response. Long conversations accumulate extensive re-reading requirements. Using new conversations prevents this accumulation from occurring.",
  "Long conversations force Claude to re-read everything continuously. This re-reading represents significant token consumption. A fresh conversation eliminates this re-reading burden and restores token efficiency.",
  "Claude must re-read your conversation history for every response it generates. Long conversations accumulate larger history that requires more re-reading per response. Tokens burn accordingly. Start a new conversation.",
  "Your long conversation gets re-read constantly by Claude. This continuous re-reading is costly. A new conversation eliminates accumulated re-reading overhead and saves tokens accordingly.",
  "Claude re-reads your entire conversation before responding. Long conversations result in excessive re-reading per message. This re-reading consumption accelerates with conversation length. A new conversation restores efficiency.",
  "The primary culprit is Claude re-reading your entire conversation with every response. Long conversations make this re-reading pattern increasingly expensive. Starting fresh resets this cost to zero.",
  "Long conversations consume more tokens not because individual responses cost more, but because Claude re-reads everything. Short conversations require minimal re-reading. Long conversations require extensive re-reading. Start new conversations.",
  "Claude re-reads your conversation before responding. Long conversations create larger re-reading requirements. Larger re-reading requirements consume more tokens. Shorter conversations require less re-reading and consume fewer tokens.",
  "Your conversation requires Claude to re-read everything. Long conversations accumulate re-reading overhead that becomes expensive. A fresh start eliminates this accumulated overhead completely.",
  "Claude re-reads your entire conversation. Long conversations result in massive re-reading requirements per response. This re-reading pattern represents your primary token consumption. A new conversation resets this to minimal.",
  "Long conversations cost more because Claude must re-read everything each turn. That re-reading accumulates. Each new message adds to the re-reading burden. New conversations avoid this accumulation.",
  "Claude re-reads your entire conversation before each message you send. Long conversations accumulate extensive re-reading requirements. This accumulated re-reading burns tokens rapidly. A new conversation provides immediate relief.",
  "Your extended conversation forces Claude to re-read thousands of words before responding. This re-reading pattern represents significant token consumption. Starting fresh eliminates this re-reading requirement.",
  "Claude re-reads everything before responding. Long conversations require more re-reading. More re-reading requires more tokens. New conversations minimize re-reading and therefore minimize token consumption.",
  "Long conversations result in Claude constantly re-reading your history. This re-reading pattern represents token consumption. A new conversation breaks this pattern and restores efficiency.",
  "Claude must re-read your conversation before answering. Long conversations create substantial re-reading requirements. Short conversations create minimal re-reading requirements. The difference in token consumption is substantial.",
  "Your conversation gets re-read by Claude with every message. Long conversations accumulate substantial re-reading. Starting fresh eliminates this accumulated re-reading burden entirely.",
  "Long conversations make Claude re-read increasingly large amounts of text per message. This increasing re-reading results in token depletion. A new conversation resets this process to minimal.",
  "Claude re-reads your entire conversation before answering. Long conversations prove expensive because re-reading requirements accumulate. New conversations prove cheap because re-reading requirements start at zero.",
  "Here is why you are burning tokens: Claude re-reads your complete conversation before responding. Long conversations accumulate extensive re-reading requirements. Starting fresh eliminates this accumulated cost.",
  "Long conversations result in Claude re-reading everything. This re-reading consumes tokens. New conversations require minimal re-reading. New conversations therefore consume fewer tokens.",
  "Claude re-reads your conversation before each response. Long conversations accumulate exponentially larger re-reading requirements. This exponential growth explains rapid token consumption. Start a new conversation.",
  "Your long conversation gets re-read repeatedly. This continuous re-reading is expensive. A new conversation contains no prior re-reading overhead and therefore costs substantially less.",
  "Claude re-reads your entire history before responding. Long conversations accumulate extensive re-reading. Extensive re-reading causes high token consumption. A new conversation resolves this completely.",
  "Long conversations force Claude to re-read thousands of words per message. This re-reading burns tokens rapidly. Starting fresh eliminates this re-reading cost immediately.",
  "Claude re-reads your whole conversation. Long conversations result in larger re-reading requirements. Larger re-reading requirements consume more tokens. Use new conversations to minimize re-reading.",
  "Your conversation requires Claude to re-read everything. Long conversations accumulate expensive re-reading overhead. Fresh conversations eliminate this overhead completely.",
  "Long conversations result in Claude re-reading your entire history. This re-reading pattern accelerates token consumption. A new conversation resets this pattern and restores efficiency.",
  "Claude must re-read your conversation before each response. Long conversations result in costly re-reading. Start fresh to reset the re-reading cost to zero.",
  "Here is the explanation: Claude re-reads your complete conversation before responding. Long conversations result in massive re-reading. Massive re-reading causes tokens to disappear. A new conversation stops this.",
  "Long conversations result in Claude constantly re-reading. This continuous re-reading drains tokens. A new conversation eliminates this re-reading drain completely.",
  "Claude re-reads your conversation history before each message. Long conversations accumulate expensive re-reading overhead throughout. Use new conversations to avoid this accumulated overhead.",
  "Your long conversation accumulates re-reading costs continuously. This accumulated cost represents token consumption. A new conversation contains no accumulated cost and therefore saves tokens.",
  "Claude re-reads everything before responding. Long conversations require extensive re-reading. Extensive re-reading consumes many tokens. New conversations require minimal re-reading and therefore consume fewer tokens.",
  "Long conversations force Claude to re-read thousands of words continuously. This re-reading cost is significant. Starting fresh eliminates this re-reading cost entirely.",
  "Claude re-reads your complete conversation per response. Long conversations accumulate more re-reading with each message. More re-reading means higher token usage. New conversations reduce re-reading dramatically.",
  "Your conversation gets re-read by Claude throughout. Long conversations accumulate expensive re-reading. A fresh start eliminates this re-reading accumulation immediately.",
  "Long conversations make Claude re-read more text with each message. This increasing re-reading pattern results in token depletion. A new conversation resets this pattern.",
  "Claude re-reads your entire conversation before responding. Long conversations cost significantly more due to re-reading. Short conversations cost significantly less due to minimal re-reading. The difference is substantial.",
  "Here is what causes tokens to disappear: Claude re-reads your complete conversation. Long conversations accumulate extensive re-reading. Extensive re-reading accelerates token consumption. Use new conversations.",
  "Long conversations result in Claude re-reading everything continuously. Continuous re-reading consumes tokens rapidly. A fresh conversation eliminates this continuous re-reading.",
  "Claude must re-read your conversation history before each response. Long conversations accumulate substantial re-reading. Starting fresh eliminates this accumulated re-reading.",
  "Your extended conversation gets re-read continuously. This continuous re-reading is costly. A new conversation eliminates this cost by eliminating accumulated re-reading.",
  "Claude re-reads your entire conversation before each response. Long conversations result in extensive re-reading per message. This extensive re-reading explains high token consumption.",
  "Long conversations cost more because Claude re-reads everything. The re-reading accumulates continuously. New conversations solve this by eliminating accumulated re-reading.",
  "Claude re-reads your conversation before each response. Long conversations accumulate re-reading overhead. This overhead becomes increasingly expensive. Start a new conversation.",
  "Your long conversation forces Claude to re-read continuously. This continuous re-reading is expensive. A new conversation avoids this re-reading cost.",
  "Claude re-reads your entire conversation per message. Long conversations accumulate extensive re-reading per message. This accumulated re-reading consumes tokens rapidly. Use new conversations.",
  "Long conversations make Claude re-read thousands of words continuously. This re-reading pattern is expensive. A new conversation eliminates this expensive pattern.",
  "Claude must re-read your conversation. Long conversations require expensive re-reading. Short conversations require inexpensive re-reading. Start new conversations regularly.",
  "Your conversation gets re-read repeatedly by Claude. Long conversations accumulate substantial re-reading. Fresh conversations eliminate this accumulated re-reading.",
  "Long conversations result in Claude re-reading everything continuously. This continuous re-reading is expensive. A new conversation is inexpensive because it requires minimal re-reading.",
  "Claude re-reads your conversation history before responding. Long conversations accumulate costly re-reading. New conversations have minimal re-reading and therefore cost significantly less.",
  "Here is why tokens vanish quickly: Claude re-reads your conversation completely. Long conversations accumulate extensive re-reading. Extensive re-reading causes rapid token consumption. Start fresh.",
  "Long conversations result in Claude constantly re-reading. This re-reading represents token consumption. A new conversation represents a fresh start with no accumulated re-reading.",
  "Claude re-reads your conversation before each response. Long conversations accumulate substantial re-reading overhead. Use new conversations to prevent this overhead.",
  "Your long conversation accumulates re-reading costs continuously. These accumulated costs consume tokens. A new conversation eliminates these accumulated costs.",
  "Claude re-reads your entire conversation. Long conversations result in more re-reading. More re-reading results in higher costs. New conversations minimize re-reading and therefore minimize costs.",
  "Long conversations make Claude re-read thousands of messages continuously. This re-reading is expensive. Starting fresh eliminates this expensive re-reading.",
  "Claude must re-read your conversation. Long conversations accumulate extensive re-reading. Extensive re-reading consumes many tokens. A new conversation solves this problem.",
  "Your conversation gets re-read by Claude throughout. Long conversations accumulate expensive re-reading. New conversations eliminate this accumulated expense.",
  "Long conversations result in expensive re-reading by Claude. A new conversation results in inexpensive re-reading by Claude. Switch conversations to save tokens.",
  "Claude re-reads your entire history before responding. Long conversations accumulate extensive re-reading. Extensive re-reading explains rapid token consumption. A fresh start resolves this.",
];

const thinkingPool = [
  'Analyzing context window...',
  'Scanning conversation history...',
  'Calculating token usage...',
  'Compressing chat logs...',
  'Assessing message density...',
  'Processing context chains...',
  'Evaluating re-read overhead...',
  'Finalizing diagnosis...',
  'Measuring token consumption patterns...',
  'Reviewing conversation structure...',
  'Analyzing memory overhead...',
  'Calculating efficiency metrics...',
  'Processing accumulated data...',
  'Evaluating response patterns...',
  'Mapping context dependencies...',
  'Quantifying usage impact...',
  'Assessing conversation depth...',
  'Analyzing message frequency...',
  'Computing overhead ratios...',
  'Reviewing efficiency factors...',
  'Evaluating cost structure...',
  'Analyzing usage trajectory...',
  'Processing diagnostic data...',
  'Measuring context density...',
  'Assessing re-reading patterns...',
  'Computing token burn rate...',
  'Analyzing conversation growth...',
  'Evaluating resource usage...',
  'Processing system metrics...',
  'Calculating performance impact...',
  'Reviewing usage distribution...',
  'Analyzing message relationships...',
  'Measuring cumulative overhead...',
  'Assessing pattern recognition...',
  'Computing efficiency score...',
  'Evaluating data density...',
  'Analyzing processing load...',
  'Calculating token allocation...',
  'Processing usage analytics...',
  'Finalizing assessment...',
];

const shuffle = (arr: string[]) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

export default function Home() {
  const [inp, setInp] = useState('');
  const [res, setRes] = useState('');
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [thinkIdx, setThinkIdx] = useState(0);
  const [thinking, setThinking] = useState<string[]>([]);

  const troubleshoot = () => {
    const selected = [];
    const pool = [...thinkingPool];
    for (let i = 0; i < 8; i++) {
      const idx = Math.floor(Math.random() * pool.length);
      selected.push(pool[idx]);
      pool.splice(idx, 1);
    }
    const shuffled = shuffle(selected);
    setThinking(shuffled);

    setLoading(true);
    setThinkIdx(0);
    setShow(true);

    let idx = 0;
    const interval = setInterval(() => {
      idx += 1;
      if (idx >= 8) {
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
        <h1 style={{ textAlign: 'center', marginBottom: '12px', fontSize: '32px', fontWeight: '600' }}>
          Claude Usage Troubleshooting
        </h1>
        <p style={{ textAlign: 'center', marginBottom: '30px', fontSize: '14px', color: '#666', maxWidth: '500px', margin: '0 auto 30px' }}>
          Diagnose apparent usage limitations, perceived model restrictions, and unexplained token consumption with immediate clarity.
        </p>

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
