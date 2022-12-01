import Accordion from "./components/Accordion"

function App() {
  const items = [
    {
      id: "asdf",
      label: "Can I use React on a project?",
      content:
        "You can use React on any project that you want. You can use React on any project that you want. You can use React on any project that you want. You can use React on any project that you want.",
    },
    {
      id: "qwer",
      label: "Can I use JavaScript on a project?",
      content:
        "You can use TavaScript on any project that you want. You can use TavaScript on any project that you want. You can use TavaScript on any project that you want. You can use TavaScript on any project that you want.",
    },
    {
      id: "kudj",
      label: "Can I use CSS on a project?",
      content:
        "You can use CSS on any project that you want. You can use CSS on any project that you want. You can use CSS on any project that you want. You can use CSS on any project that you want.",
    },
  ]

  return <Accordion items={items} />
}

export default App
