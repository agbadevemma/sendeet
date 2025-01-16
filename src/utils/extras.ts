
// Strips HTML tags and applies basic formatting
export const formatPlainText = (html: string) => {
    // Replace header tags with newlines and uppercase text
    let plainText = html.replace(/<h[1-6]>(.*?)<\/h[1-6]>/g, '\n\n$1\n\n');
  
    // Replace paragraph and line break tags with newlines
    plainText = plainText.replace(/<p>(.*?)<\/p>/g, '\n$1\n').replace(/<br\s*\/?>/g, '\n');
  
    // Replace unordered and ordered list items
    plainText = plainText.replace(/<ul>/g, '\n').replace(/<\/ul>/g, '\n');
    plainText = plainText.replace(/<ol>/g, '\n').replace(/<\/ol>/g, '\n');
    plainText = plainText.replace(/<li>(.*?)<\/li>/g, '- $1\n');
  
    // Optional: Add basic emphasis for bold and italic
    plainText = plainText.replace(/<b>(.*?)<\/b>/g, '*$1*').replace(/<strong>(.*?)<\/strong>/g, '*$1*');
    plainText = plainText.replace(/<i>(.*?)<\/i>/g, '_$1_').replace(/<em>(.*?)<\/em>/g, '_$1_');
  
    // Remove any remaining HTML tags
    plainText = plainText.replace(/<\/?[^>]+(>|$)/g, '');
  
    // Trim excess whitespace and return
    return plainText.trim();
  };
  

