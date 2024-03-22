const teamMembers = document.querySelectorAll('.team-member');

        let currentMemberIndex = 0;

        function fadeInNextMember() {
            const currentMember = teamMembers[currentMemberIndex];
            currentMember.style.opacity = '1';
            currentMemberIndex = (currentMemberIndex + 1) % teamMembers.length;
        }

        // Show the first member initially
        fadeInNextMember();

        // Add click event listener to the document to display the next member
        document.addEventListener('click', fadeInNextMember);