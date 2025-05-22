window.onload = () => {
    const list_cont = document.querySelector(".list-cont")
    const about_cont = document.querySelector(".about-cont")
    const b_menu_btn = document.querySelector('.b-menu-btn');
    const b_menu = document.querySelector('.b-menu')
    var open = false
    const contacts = [
        "Developers",
        "Jobs",
        "Help centre",
        "Our Location",
        "About us"
    ]

    if (list_cont) {
        for (let i = 0; i < contacts.length; i++) {
        const div = document.createElement("h3")
        div.classList.add("list-item")
        div.style.animation = "fade-in 0.5s ease-in-out forwards"
        div.style.animationDelay = `${i * 0.1}s`
        div.innerText = contacts[i]
        list_cont.appendChild(div)
    }
    }

    const about = `
        Welcome to Afrosounds — where every beat tells a story, and every story moves a soul.

        Afrosounds was born from a simple yet powerful idea: music has the power to unite, uplift, and inspire. We are more than a platform — we are a movement. A movement rooted in the heart of Africa, but resonating far beyond borders.

        We celebrate the richness, the rhythm, and the raw beauty of African music. From Afrobeats to highlife, amapiano to hiplife, our mission is to amplify the voices of artists who are shaping the sound of a generation. Whether you're a fan, a creator, or a dreamer — you have a place here.

        At Afrosounds, we believe that every voice matters. That’s why we’re building a space where emerging talents can rise, where legends can be honored, and where culture is preserved through sound. We're here to give power to the unheard, rhythm to the restless, and inspiration to the world.

        This is more than just music — this is a vibe, a vision, and a legacy in motion.

        So plug in, turn it up, and join us on a journey where every song connects us — and every connection brings us closer to the rhythm of who we are.

        Afrosounds — Feel the rhythm. Share the vibe.
    `

    if (about_cont) {
        const about_p = document.createElement("p")
        about_p.classList.add("about-item")
        about_p.innerHTML = about
        about_cont.appendChild(about_p)
        about_p.style.animation = "fade-in 0.5s ease-in-out forwards"
    }

    b_menu_btn.addEventListener('click',() => {
        if (!open) {
            b_menu.style.display = "block"
            open = true
        }else {
            b_menu.style.display = "none"
            open = false
        }
    })

console.log('con-ab.js is working')
}