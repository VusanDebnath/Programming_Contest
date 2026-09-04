function extractBodyContent(htmlString) {
    const afterBodyOpen = htmlString.split("<body>");

    const bodyContext = afterBodyOpen[1].split("</body>");

    return bodyContext[0];
}



// ছবির মতো করে ভিজ্যুয়ালাইজ করো (Example 1 দিয়ে):আমাদের মূল htmlString ছিল

// এটি:html<html><head>...</head><body><h1>Welcome!</h1></body></html>

// ধাপ ১: htmlString.split('<body>') করার পর টেক্সটটি মাঝখান থেকে কেটে দুটি টুকরো হয়ে গেল:

// টুকরো [0]: <html><head>...</head> (আমাদের দরকার নেই)

// টুকরো [1]: <h1>Welcome!</h1></body></html> (আমাদের দরকারি অংশ এখানে আছে)

// ধাপ ২: এবার আমরা শুধু টুকরো [1] অংশটিকে নিলাম এবং সেটিকে </body> দিয়ে আবার কাটলাম:

// afterBodyOpen[1].split('</body>')এখন এটি আবার দুটি টুকরো হয়ে গেল

// :টুকরো [0]: <h1>Welcome!</h1> (এটাই আমাদের ফাইনাল উত্তর!)

// টুকরো [1]: </html> (আমাদের দরকার নেই)

// ধাপ ৩: তাই আমরা সবশেষে return bodyContent[0]; করে দিলাম।