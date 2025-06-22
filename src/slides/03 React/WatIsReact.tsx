import { Prose } from '../../shared/Prose';

export function WatIsReact() {
  return (
    <Prose>
      <h1>Wat is React?</h1>
      <h2>Als je een React-app bouwt, dan...</h2>
      <p className="font-mono text-3xl -mx-4 mb-0 px-4 py-2 bg-black rounded-xl">
        <span className="text-amber-300">UI</span>
        {' = '}
        <span className="text-cyan-300">f</span>
        <span className="text-blue-400">
          (<span className="text-pink-300">state</span>)
        </span>
      </p>
      <p>
        Die{' '}
        <code className="text-xl">
          `<span className="text-cyan-300">f</span>`
        </code>{' '}
        is onze React-applicatie letterlijk een functie.
      </p>
      <p>Je schrijft een functie die bepaalt hoe data (state) wordt omgezet naar UI.</p>
      <h2>React is declaratief, niet imperatief</h2>
      <p>
        Dat betekent: je beschrijft <b>wat</b> je wilt zien, niet <b>hoe</b> React dat moet doen.
      </p>
      <p>
        Dus in plaats van <code>document.createElement('div')</code>, gewoon <code>{'<div>'}</code>.
      </p>
      <p className="text-sm italic">
        Kleine kanttekening: Uiteindelijk komt er ook nog wel wat imperatieve code bij te kijken.
      </p>
    </Prose>
  );
}
