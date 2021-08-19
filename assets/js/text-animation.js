jQuery(document).ready(function() {

    function scrollDown(div) {
        div.animate({
            scrollTop: 10000
        }, "slow");
    }
    var count = 0;
    var msgContainer = jQuery(".messages-wrapper");
    var messages = [];
    messages[0] = [{
            message: "How much for a 6 page research paper? Needs to be done in a week.",
            user: "to"
        }, {
            message: "Does $50 sound good?",
            user: "from"
        }, {
            message: "Yeah, that's fine. Will it be an A grade paper?",
            user: "to"
        }, {
            message: "We can't guarantee an A. But, we haven't had any problems with customers thus far",
            user: "from"
        }, {
            message: "Ok sounds good. Where do I send additional information?",
            user: "to"
        }, {
            message: "Send all additional info to emailtxtanerd@gmail.com",
            user: "from"
        },
    ];

    messages[1] = [{
        message: "How much for Calculus homework?",
        user: "to"
    }, {
        message: "How many problems need to be done? Also, do you want problems shown or not?",
        user: "from"
    }, {
        message: "Work needs to be shown. The homework has 30 problems.",
        user: "to"
    }, {
        message: "$45 okay? If yes, email us at emailtxtanerd@gmail.com ",
        user: "from"
    }, {
        message: "The price is fine, I'll email you guys right away.",
        user: "to"
    }]

    messages[2] = [{
            message: "I need a research paper done in two weeks. It's on income inequality. Are you guys available?",
            user: "to"
        }, {
            message: "Yeah, we're available. How many pages? MLA? APA? How many sources? ",
            user: "from"
        }, {
            message: "Four pages long. MLA. A minimum of four sources. ",
            user: "to"
        }, {
            message: "Sounds good. We can have it done in a week. Is $38 okay? If yes, shoot us additinal info to emailtxtanerd@gmail.com",
            user: "from"
        }, {
            message: "Ok, thanks!",
            user: "to"
        }]

    //var messages = messages3;
    var createMessage = function(messageString, user) {
        var message;
        if (user == "from") {
            message = jQuery("<div class='message from'>" + messageString + "</div>");
        }
        if (user == "to") {
            message = jQuery("<div class='message to'>" + messageString + "</div>");
        }
        message.hide();
        return message;
    }

    // INITIALIZATION OF BACKGROUND
    var messageToList = [];
    var messageFromList = [];
    var messageTypedList = [];
    var msgInput = jQuery("#imessage .message-input");

    function init(messages) {
        messageTypedList = [];
        messageFromList = [];
        messageToList = [];
        messages.forEach(function(message, index) {
            var messageObject = createMessage(message.message, message.user);
            msgContainer.append(messageObject);
            messageObject.show('fast');
        });
        msgContainer.empty();
        // END OF INITIALIZATION

        // DEFINING MESSAGE LISTS
        for (var i = 0; i < messages.length; i++) {
            if (messages[i].user == "to") {
                messageToList.push(messages[i].message);
            }
            if (messages[i].user == "from") {
                messageFromList.push(messages[i].message);
            }
        }
        messageTypedList[0] = messageToList[0];

        for (var i = 1; i < messageToList.length; i++) {
            messageTypedList[i] = "^3000 " + messageToList[i];
        }
        typeMessage();
    }
    //init(messages[count]);
    // END OF MESSAGE LIST DEFINITION
    //typeMessage();
    var addMessage = function(index) {
        var messageObject = createMessage(messageToList[index], "to");
        msgContainer.append(messageObject);
        messageObject.show('normal');
        if (messageFromList[index]) {
            if (messageFromList.length == messageToList.length && index == (messageFromList.length - 1)) {
                setTimeout(function() {
                    msgContainer.empty()
                    msgInput.typed('reset');
                    if (jQuery('.message-input').length == 0) {
                        jQuery('#messageFooter').prepend(msgInput);
                    }
                    if (count == 2) {
                        count = 0;
                    } else {
                        count++
                    }
                    init(messages[count]);
                }, 2600);
            }
            setTimeout(function() {
                var fromMessageObject = createMessage(messageFromList[index], "from");
                msgContainer.append(fromMessageObject);
                fromMessageObject.show('normal');
            }, 1300);
        } else {
            setTimeout(function() {
                msgContainer.empty()
                msgInput.typed('reset');
                msgInput.typed('reset');
                if (jQuery('.message-input').length == 0) {
                    jQuery('#messageFooter').prepend(msgInput);
                }
                if (count == 2) {
                    count = 0;
                } else {
                    count++
                }
                init(messages[count]);
            }, 1300);
        }
    };

    function isEven(num) {
        if (num % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }

    function clearInput() {
        jQuery("#imessage .message-input").text("");
        jQuery("#imessage .message-input").css('color', 'white');
    }

    function inputRestore() {
        jQuery("#imessage .message-input").css('color', '#363945');
    }


    //jQuery("#imessage").on('click', function() {
    msgContainer.empty();
    function typeMessage() {
        jQuery("#add-message").fadeOut(300);
        msgInput.typed({
            strings: messageTypedList,
            typeSpeed: 0,
            showCursor: false,
            onStringTyped: function(index) {
                addMessage(index);
                jQuery("#imessage .message-input").text("");
                clearInput();
            },
            callback: function() {
                //msgContainer.empty();
            },
            preStringTyped: function() {
                inputRestore();
            },
            resetCallback: function() {},
            loop: false
        });
    }
    init(messages[count]);
    //jQuery("#imessage").off();
    var gaMsg = "Video Played!"
    ga('send', 'event', 'Video Play', gaMsg);
    //})
});