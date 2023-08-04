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
    const message = successful ? `${text} copied to clipboard!` : 'Unable to copy text to clipboard!'
    Toast.show({
      content: message
    })
  } catch (err) {
    console.error('Failed to copy text:', err)
  } finally {
    // Clean up by removing the temporary textarea
    document.body.removeChild(textArea)
  }
}
