// Navigation toggle for mobile
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle")
  const navMenu = document.getElementById("navMenu")

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
    })
  }

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]')
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
})

// Video play functionality
function playVideo() {
  const videoWrapper = document.querySelector('.video-wrapper');
  const video = videoWrapper.querySelector('video');

  // Oculta el botón de play y la capa superpuesta
  videoWrapper.querySelector('.video-overlay').style.display = 'none';
  videoWrapper.querySelector('.play-button').style.display = 'none';

  // Inicia la reproducción del video
  video.play();
  
  // Opcional: Muestra los controles nativos del video al reproducir
  video.controls = true; 
}

// ROI Calculator
function calculateROI() {
  const revenue = Number.parseFloat(document.getElementById("revenue").value) || 5000000
  const employees = Number.parseInt(document.getElementById("employees").value) || 100
  const sector = document.getElementById("sector").value

  // Simple calculation based on inputs (in a real app, this would be more sophisticated)
  const baseMultiplier = revenue / 10000000 // Base multiplier based on revenue
  const employeeMultiplier = employees / 100 // Employee factor

  let sectorMultiplier = 1
  switch (sector) {
    case "Finanzas":
      sectorMultiplier = 1.5
      break
    case "Logística":
      sectorMultiplier = 1.3
      break
    case "Salud":
      sectorMultiplier = 1.2
      break
    case "Retail":
      sectorMultiplier = 1.1
      break
    case "Manufactura":
      sectorMultiplier = 1.4
      break
    default:
      sectorMultiplier = 1
  }

  const costReduction = Math.round(450000 * baseMultiplier * sectorMultiplier)
  const efficiency = Math.round(320000 * baseMultiplier * employeeMultiplier)
  const newRevenue = Math.round(280000 * baseMultiplier * sectorMultiplier)
  const totalBenefits = costReduction + efficiency + newRevenue
  const investment = Math.round(revenue * 0.02) // Assume 2% of revenue as investment
  const roi = Math.round((totalBenefits / investment) * 100)

  // Update the display
  document.getElementById("costReduction").textContent = `€${costReduction.toLocaleString()}`
  document.getElementById("efficiency").textContent = `€${efficiency.toLocaleString()}`
  document.getElementById("newRevenue").textContent = `€${newRevenue.toLocaleString()}`
  document.getElementById("totalROI").textContent = `${roi}%`
}

// Tab functionality for resources section
function showTab(tabName) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll(".tab-content")
  tabContents.forEach((content) => {
    content.classList.remove("active")
  })

  // Remove active class from all tab buttons
  const tabButtons = document.querySelectorAll(".tab-button")
  tabButtons.forEach((button) => {
    button.classList.remove("active")
  })

  // Show selected tab content
  const selectedTab = document.getElementById(tabName)
  if (selectedTab) {
    selectedTab.classList.add("active")
  }

  // Add active class to clicked button
  const clickedButton = event.target
  clickedButton.classList.add("active")
}

// Form submission handling
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Gracias por tu mensaje. Te contactaremos pronto.")
      // In a real implementation, this would send the form data to a server
    })
  }
})

// Intersection Observer for animations
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(".service-card, .case-card, .stat-item, .step-card")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
  let start = 0
  const increment = target / (duration / 16)

  function updateCounter() {
    start += increment
    if (start < target) {
      element.textContent = Math.floor(start)
      requestAnimationFrame(updateCounter)
    } else {
      element.textContent = target
    }
  }

  updateCounter()
}

// Initialize counter animations when stats section is visible
document.addEventListener("DOMContentLoaded", () => {
  const statsSection = document.querySelector(".stats-section")
  if (statsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll(".stat-number")
            statNumbers.forEach((stat) => {
              const text = stat.textContent
              const number = Number.parseInt(text.replace(/\D/g, ""))
              if (number) {
                stat.textContent = "0"
                setTimeout(() => {
                  animateCounter(stat, number)
                }, 500)
              }
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(statsSection)
  }
})


