const rootElement = document.getElementById('root');

// const element = document.createElement('div');
// element.textContent = 'Hello World';
// element.className = 'container';
// rootElement.appendChild(element);

// const element = React.createElement(
//     'div',
//     {
//       className: 'container',
//         children: ['Hello World', 'Goodbye World']
// },
//   );

  console.log(element);
  const element = <div className="container">Hello World</div>;
  React.createElement(
    'ul',
    null,
    React.createElement('li', null, 'Home'),
    React.createElement('li', null, 'About'),
    React.createElement('li', null, 'Contact')
  );
 ReactDOM.createRoot(rootElement).render(element);
