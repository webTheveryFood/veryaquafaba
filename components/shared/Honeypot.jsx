// Anti-bot trap shared by the three forms: a field people never see nor reach with the keyboard. Bots that fill
// every input fill it too; the form then shows its success line without sending anything or counting a
// conversion, so the bot moves on (Arnaud, 24 November 2026: 20+ bot forms a day). Turnstile stays the guard.
const NAME = 'website';

export const Honeypot = () => (
  <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
    <input type="text" name={NAME} tabIndex={-1} autoComplete="off" />
  </div>
);

export const trapped = (fd) => String(fd.get(NAME) || '').trim() !== '';
