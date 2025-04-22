const { invoke } = window.__TAURI__.core;

// let greetInputEl;
// let greetMsgEl;

//async function greet() {
//  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
//  greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
// }

// window.addEventListener("DOMContentLoaded", () => {
//   greetInputEl = document.querySelector("#greet-input");
//   greetMsgEl = document.querySelector("#greet-msg");
//   document.querySelector("#greet-form").addEventListener("submit", (e) => {
//     e.preventDefault();
//     greet();
//   });
// }); ]

function saveEditorContent() {
  const editor = document.querySelector('.editor');
  if (!editor) return;

  const content = editor.value;

  // Ask the user for a filename
  const username = prompt('Enter yourfilename:', 'file-name');

  if (username) {
    const safeFilename = `${username}.txt`; // You can sanitize this further if needed
    download(content, safeFilename, 'text/plain');
  }
}

document.getElementById('saveBtn').addEventListener('click', (e) => {
  e.preventDefault();
  saveEditorContent();
});

document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    e.preventDefault();
    saveEditorContent();
  }
});

// Download function
function download(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}
