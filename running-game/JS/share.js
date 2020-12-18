(ShareSite = () => {
 
    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("Some Fun For the Holiday?");
  
    facebookBtn.setAttribute(
      "href",
      `https://www.facebook.com/sharer.php?u=${postUrl}`
    );
  
    twitterBtn.setAttribute(
      "href",
      `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
    );
  
    emailBtn.setAttribute(
      "href",
      `mailto:?subject=I wanted you to see this site&amp;body=${postTitle} ${postUrl}`
    );
  
    whatsappBtn.setAttribute(
      "href",
      `https://wa.me/?text=${postTitle} ${postUrl}`
    );
  })();