/*-----------------------------------------------------------------------------
A bot for managing a users to-do list.  See the README.md file for usage 
instructions.
-----------------------------------------------------------------------------*/

var Botkit = require('botkit');
var builder = require('../../');
var index = require('./dialogs/index')

var controller = Botkit.slackbot();

var slackToken = 'xoxb-41279143126-CtiRRKjRToPxr7BajGbWzskk';

var bot = controller.spawn({
   token: slackToken
});

var slackBot = new builder.SlackBot(controller, bot);
slackBot.add('/', index);

slackBot.listenForMentions();

bot.startRTM(function(err,bot,payload) {
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});