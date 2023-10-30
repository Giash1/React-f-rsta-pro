<!-- Instalisation process
npm install -g npx
npx create-react-app crossplatform-web --template cra-template-pwa-typescript
cd crossplatform-web
npm start

TS: Typescript (.ts)
javascript (.js) med "strong-typing".
Gör det lättare att skapa stora applikationer utan buggar.

TSX: typescript + JSX (.tsx)
".tsx" filändelsen används så vi kan använda JSX och typescript tillsammans.
Används ofta som filändelse i moderna React-appar.

Öppna filen tsconfig.json och ändra strict från true till false

PWA(Progressive Web Apps) - Konfiguration
Gå till index.tsx och ändra
serviceWorkerRegistration.unregister();
till
serviceWorkerRegistration.register();

create a folder named build
npm run build
npx serve -s build


Öppna devtools i webbläsaren. Under "Application"-fliken ska du kunna se ditt
manifest och din service worker.
Vi kan sätta Network till "Offline" och sidan hämtas fortfarande.

Med serviceWorker uppsatt så kan appen laddas ner genom att klicka på "ladda ner"-
ikonen i browsers sökfält och på så sätt spara appen på din dator. Om det kommer
inte starta terminalen igen och köra local host, det ska fungera

för att byta namnet på appen gå till public=>manifest.json och byta namnet
npm run build


use another file named index.ts och exportera Textinput och createUser iställad export default

styling the project use module: make another component named CreateUser.module.scss
style the container and import it in the component and use it where you want to use like <div className={styles.container}>tttt</div>
to use sass:  npm install sass

creating component
In general, the goal of component-based architecture in React is to create reusable and composable building blocks. The parent component orchestrates the interaction between these building blocks, while child components are focused on specific functionality and presentation.

/*
Often, you’ll want your component to “remember” some information and display it. For example,
maybe you want to count the number of times a button is clicked.To do this, add state to your component.
example
function MyButton() {
    adding state where count is the current status and setCount will change by adding time to time
  const [count, setCount] = useState(0);

Adding Event handler function
  function handleClick() {
    setCount(count + 1);
  }

  return (
  adding onClick event
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

to do styled using component
npm install styled-components

*/


-->
