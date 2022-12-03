import { useEffect, useRef, useState } from "react";

const xtermjsTheme = {
  foreground: "#F8F8F8",
  background: "#2D2E2C",
  selectionBackground: "#5DA5D533",
  black: "#1E1E1D",
  brightBlack: "#262625",
  red: "#CE5C5C",
  brightRed: "#FF7272",
  green: "#5BCC5B",
  brightGreen: "#72FF72",
  yellow: "#CCCC5B",
  brightYellow: "#FFFF72",
  blue: "#5D5DD3",
  brightBlue: "#7279FF",
  magenta: "#BC5ED1",
  brightMagenta: "#E572FF",
  cyan: "#5DA5D5",
  brightCyan: "#72F0FF",
  white: "#F8F8F8",
  brightWhite: "#FFFFFF",
};

export const Terminal = () => {
  const loaded = useRef(false);

  const [command, setCommand] = useState("");
  useEffect(() => {
    const container = document.getElementById("terminal");
    (async () => {
      const { Terminal } = await import("xterm");
      const { FitAddon } = await import("xterm-addon-fit");

      if (container && !container.hasChildNodes()) {
        const terminal = new Terminal({
          // theme: xtermjsTheme,
        });
        const fitAddon = new FitAddon();
        terminal.loadAddon(fitAddon);
        terminal.open(container);
        terminal.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ");
        fitAddon.fit();

        terminal.onData((data) => {
          console.log("DATA", data);
          if (data) {
            setCommand((d) => d + data);
            terminal.write(data);
          }
        });

        terminal.onKey((e) => {
          // handle backspace
          if (e.domEvent.key === "Backspace") {
            setCommand((d) => {
              console.log("BEFORE", d);
              const command = d.slice(0, -1);
              console.log("AFTER", command);
              if (command.length > 0) {
                terminal.write("\b \b");
              }
              return command;
            });
          }
        });
      }
    })();

    return () => {
      // cleanup
      if (container) {
        // container.remove();
      }
    };
  }, []);
  return <div id="terminal" className="w-full bg-slate-800 relative"></div>;
};
