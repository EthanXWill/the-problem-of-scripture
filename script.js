const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

function startQuiz() {
    showTextNode(1);
};

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
};

function showOption(option) {
    return option
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    showTextNode(nextTextNodeId)
};

const textNodes = [
    {
        id: 1,
        text: "The Bible is clear and unambiguos in its message, and everything it says is completely true; therefore the Bible is our ultimate authority, and nothing else is equal to its authority.",
        options: [
            {
                text: "Yes",
                nextText: 2
            },
            {
                text: "Well, everything it says is completely true, but it's difficult to know with certainty what it teaches beyond the central message that salvation comes through faith in Jesus.",
                nextText: 3
            },
            {
                text: "No",
                nextText: 4
            }
        ]
    },
    {
        id: 2,
        text: "The Bible teaches that God predetermines where everyone will go-heavon or hell.",
        options: [
            {
                text: "Yes",
                nextText: 5
            },
            {
                text: "Sorta. God doesn't choose beforehand where you will go. But if you do truly choose to follow Jesus, God won't let you fall away. you can choose to follow Jesus, but you'll never choose to leave Him.",
                nextText: 6
            },
            {
                text: "No, you can choose to follow Jesus, and thereby become a Christian. You can later choose to walk away and forfeit your salavation. You can return afterwards by placing your faith in Jesus again.",
                nextText: 7
            }
        ]
    },
    {
        id: 3,
        text: "Well, everything it says is completely true, but it's difficult to know with certainty what it teaches beyond the central message that salvation comes through faith in Jesus.",
        options: [
            {
                text: "Yes, the Bible clearly teaches that we must place our trust in Jesus--there's no other way to be saved. Anyone who doesn't become a Christian remains lost in their sins and will die eternally separated form God. But beyond that, all that other doctrine sruff is just divisive and pointless.",
                nextText: 8
            },
            {
                text: 'Well, define what it means to "put your faith in Jesus." Who are we to decide how that\'s done or what that looks like?',
                nextText: 9
            }
        ]
    },
    {
        id: 4,
        text: "The Bible is completely true, but we need the leaders of the one-and-only true Church that God has appointed to interpret it for us. They are always right in their interpretation.",
        options: [
            {
                text: "Yes",
                nextText: 10
            },
            {
                text: "No",
                nextText: 11
            }
        ]
    },
    {
        id: 5,
        text: "Presbyterian PCA (not USA) or Reformed Churches.",
        options: [
            {
                text: "Restart?",
                nextText: -1
            }
        ]
    },
    {
        id: 6,
        text: "The Supernatural gifts of the Holy spirit are still in operation today (speaking in tongues, healing, etc.)",
        options: [
            {
                text: "Yes",
                nextText: 12
            },
            {
                text: "No",
                nextText: 13
            }
        ]
    },
    {
        id: 7,
        text: "Even though you receive the Holy Spirit when you become a Christian, there is a second experience of the Holy Spirit available to all Christians that happens later, which results in you becoming \"baptized in the Holy Spirit.\"",
        options: [
            {
                text: "Yes. When you are \"baptized in the Holy Spirit\" you are made completely holy. Before, you couldn't love God with all your heart, mind, soul, strength. Now, you can.",
                nextText: 14
            },
            {
                text: "No. When you became a Christian that is the same thing as being \"baptized in the Holy Spirit.\"",
                nextText: 15
            }
        ]
    },
    {
        id: 8,
        text: "Some of the United Methodist Churches as well as many Non-Denominational Churches.",
        options: [
            {
                text: "Restart?",
                nextText: -1
            }
        ]
    },
    {
        id: 9,
        text: "United Methodist Church and Presbyterian USA (not PCA)",
        options: [
            {
                text: "Restart?",
                nextText: -1
            }
        ]
    },
    {
        id: 10,
        text: "You're Catholic... sorry",
        options: [
            {
                text: "Restart?",
                nextText: -1
            }
        ]
    },
    {
        id: 11,
        text: "The Bible isn't a reliable source for a final authority. Its teachings about how to live our lives are convoluted by the authors' biases and fallenness.",
        options: [
            {
                text: "We'll still try to trust what it says about God, even if we can't trust what it says about how to live morally.",
                nextText: 9
            },
            {
                text: "The Bible just isn't very trustworthy. Most of it is unreliable. But it's still often very inspiring to read.",
                nextText: 16
            }
        ]
    },
    {
        id: 12,
        text: "Charismatic Baptists and Calvary Chapel.",
        options: [
            {
                text: "Restart?",
                nextText: -1
            }
        ]
    },
    {
        id: 13,
        text: "Evangelical Free Church and Baptists.",
        options: [
            {
                text: "Restart?",
                nextText: -1
            }
        ]
    },
    {
        id: 14,
        text: "When you are \"baptized in the Holy Spirit\" you are made completely holy. Before, you couldn't love God with all your heart, mind, soul, strength. Now, you can.",
        options: [
            {
                text: "Yes",
                nextText: 17
            },
            {
                text: "Yes, but that second experience isn't the \"baptism of the Holy Spirit.\" It's teh gift of sanctification. There is a third experience of the Holy Spirit, and that is the baptism of the Holy Spirit. When you receive this baptism, you will speak in other tongues, and then you will be able to use other supernatural spiritual gifts.",
                nextText: 18
            },
            {
                text: "No, we can never achieve perfection. The second experience of the Holy Spirit, the baptism of the Holy Spirit, is when God gives you the ability to use the supernatural gifts of the Spirit (speaking in tongues, miracles, prophecy, etc.)",
                nextText: 19
            }
        ]
    },
    {
        id: 15,
        text: "The supernatural gifts of the Spirit are still in operation today (speaking in tongues, healing, etc.)",
        options: [
            {
                text: "Yes",
                nextText: 20
            },
            {
                text: "No",
                nextText: 21
            },
        ]
    },
    {
        id: 16,
        text: "Episcopalian, Lutheran ECLA (not Missouri Synod) and Presbyterian USA (not PCA.)",
        options: [
            {
                text: "Restart?",
                nextText: -1
            }
        ]
    },
    {
        id: 17,
        text: "Nazarene Church, Wesleyan Church, Church of God (Anderson, Indiana.)",
        options: [
            {
                text: "Restart?",
                nextText: -1
            }
        ]
    },
    {
        id: 18,
        text: "Some Pentecostal denominations such as The Church of God in Christ and The CHurch of God (Cleveland, Tenneesse.)",
        options: [
            {
                text: "Restart?",
                nextText: -1
            }
        ]
    },
    {
        id: 19,
        text: "Those who recieve the baptism in the Holy Spirit will first speak in tongues before they use any of the other gifts of the Spirit.",
        options: [
            {
                text: "Yes",
                nextText: 22
            },
            {
                text: "Not necessarily",
                nextText: 23
            }
        ]
    },
    {
        id: 20,
        text: "We should strive to see these gifts expressed regularly in our worship services.",
        options: [
            {
                text: "Yes, we seek to experience the supernatural gifts regularly.",
                nextText: 24
            },
            {
                text: "They may occur, but the more \"supernatural\" gifts are not emphasized over the others.",
                nextText: 25
            }
        ]
    },
    {
        id: 21,
        text: "Freewill Baptists and Churches of Christ.",
        options: [
            {
                text: "Restart?",
                nextText: -1
            }
        ]
    },
    {
        id: 22,
        text: "Some Pentecostal denominations such as The Assemblies of God.",
        options: [
            {
                text: "Restart?",
                nextText: -1
            }
        ]
    },
    {
        id: 23,
        text: "Charismatics.",
        options: [
            {
                text: "Restart?",
                nextText: -1
            }
        ]
    },
    {
        id: 24,
        text: "Vineyard Movement.",
        options: [
            {
                text: "Restart?",
                nextText: -1
            }
        ]
    },
    {
        id: 25,
        text: "Evangelical Covenant Church and some Methodist Churches.",
        options: [
            {
                text: "Restart?",
                nextText: -1
            }
        ]
    }
]

startQuiz()