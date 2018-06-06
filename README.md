# mailmerge
A simple mail merge for Google Sheets using Google Apps Script. Suggestions and improvements welcome.

Instructions:
1. Open a Google Sheet with the email addresses of people you want to send a mass email to
2. Click Tools > Script editor to open the Google Apps Script page
3. Highlight everything (the "myFunction {" stuff) and delete it
4. Go to the [sendEmails.gs](https://github.com/samanthasunne/mailmerge/blob/master/sendEmails.gs) file in this repository and copy the whole thing.
5. Paste it into your script editor. Click Save (the little floppy disk in the toolbar)
6. Follow the instructions in the comments (light red text that starts with //). Note that Gmail will only let you send about 100 emails at once.
7. Click Save again and click the bug button to debug your script before running it (the play button)

Made at the [Hacks/Hackers New Orleans](https://www.meetup.com/Hacks-Hackers-New-Orleans) hackathon for Open Data Day 2018.
