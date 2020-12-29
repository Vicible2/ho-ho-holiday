//TODO: add snap to drag elements

(interact(".draggable").draggable({
        listeners: {
            start (event) {
                console.log(event.type, event.target)
            },
            move (event) {
                let target = event.target;
                let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
                let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                target.style.transform = `translate(${x}px, ${y}px)`;

                target.setAttribute('data-x', x);
                target.setAttribute('data-y', y);
            },
        },

        modifiers: [
            interact.modifiers.restrictRect({
                restriction: document.getElementById("container-game"),
                endOnly: true
            }),

            interact.modifiers.snap({
                targets: [ { y: 122 } ] ,
                offset: document.getElementById("container-game"),
                relativePoints: [
                    { x: 0  , y: 0   }],
            })
        ]
    }))();

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


