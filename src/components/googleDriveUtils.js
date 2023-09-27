export function convertGoogleDriveLink(sharedLink) {
    const regex = /https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)\/view/;
    const match = sharedLink.match(regex);
  
    if (match) {
      const fileId = match[1];
      const directUrl = `https://drive.google.com/uc?id=${fileId}`;
      return directUrl;
    } else {
      return sharedLink;
    }
  }
  