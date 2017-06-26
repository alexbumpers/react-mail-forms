# react-mail-forms | about
react-mail-forms is a simple, elegant, ready-made tool for implementing email/contact forms on React sites using Nodemailer. No need for a heavy email service: just simply plug in your email information, and the input from the form will be sent to the email that you give.

Currently the form sends email that is based on the data in the App.js file, and
**not** based on the form itself, although this should be resolved soon.


## react-mail-forms | getting started

Simply fork and clone the repo and get started with the boilerplate in `App.js`. Requires up-to-date version of Ant Design, which can be installed with `npm install -g antd`.


## react-mail-forms | demo

This is what the base boilerplate rendering looks like for react-mail-forms on a
live site/localhost:

![react-mail-forms live demo]
(http://i.imgur.com/OFPNNYT.jpg)

Simply run `npm start` to view the demo site, and feel free to use this
as a boilerplate/template.

## react-mail-forms | troubleshooting

Running into trouble? Open an issue on Github and we'll get it resolved ASAP. Feel free to contribute.

Regarding 'module not found: DNS/child_process' errors: this is likely an issue
with your webpack config.
