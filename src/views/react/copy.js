import { Toast } from 'antd-mobile'

export function copyTextToClipboard (text, id = 'copy') {
  const textArea = document.getElementById(id)
  if (id === 'copy') {
    textArea.value = text
  }

  // Select the text inside the textarea
  textArea.select()

  try {
    // Copy the selected text to the clipboard
    const successful = document.execCommand('copy')
    const txt = text.length > 100 ? 'Content' : text
    const message = successful ? `${txt} copied to clipboard!` : 'Unable to copy text to clipboard!'
    Toast.show({
      content: message
    })
  } catch (err) {
    console.error('Failed to copy text:', err)
  }
}
