// Staff On TAP - Main JavaScript File

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all functionality
  initSmoothScrolling();
  initSearchFunctionality();
  initButtonAnimations();
  initImageLazyLoading();
  initScrollAnimations();
  initMobileMenu();

  console.log("Staff On TAP website initialized successfully!");
});

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Search functionality
function initSearchFunctionality() {
  const searchInput = document.querySelector(".search-input");
  const getStartedBtn = document.querySelector(".get-started-btn");

  if (searchInput) {
    // Handle search input
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        handleSearch(this.value);
      }
    });

    // Focus animation
    searchInput.addEventListener("focus", function () {
      this.parentElement.style.transform = "scale(1.02)";
    });

    searchInput.addEventListener("blur", function () {
      this.parentElement.style.transform = "scale(1)";
    });
  }

  // Get Started button functionality
  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", function () {
      const searchValue = searchInput ? searchInput.value : "";
      handleGetStarted(searchValue);
    });
  }
}

// Handle search submission
function handleSearch(searchValue) {
  if (searchValue.trim()) {
    // In a real application, this would make an API call
    console.log("Searching for:", searchValue);

    // Show loading state
    showNotification(
      "LAUNCHING SOON...",
      "info",
    );

    // Simulate API call
    setTimeout(() => {
      showNotification("LAUNCHING SOON...", "success");
    }, 1500);
  } else {
    showNotification("LAUNCHING SOON...", "warning");
  }
}

// Handle Get Started button
function handleGetStarted(location = "") {
  if (location.trim()) {
    console.log("Getting started with location:", location);
    showNotification("LAUNCHING SOON...", "info");
  } else {
    console.log("Getting started without location");
    showNotification("LAUNCHING SOON...", "info");
  }

  // In a real application, this would redirect to the appropriate page
  setTimeout(() => {
    // window.location.href = '/booking';
    console.log("LAUNCHING SOON...");
  }, 1000);
}

// Button animations and interactions
function initButtonAnimations() {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    // Add ripple effect on click
    button.addEventListener("click", function (e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
                pointer-events: none;
            `;

      this.style.position = "relative";
      this.style.overflow = "hidden";
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });

    // Hover effects
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
}

// Lazy loading for images
function initImageLazyLoading() {
  const images = document.querySelectorAll("img[src]");

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = "1";
            observer.unobserve(img);
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    images.forEach((img) => {
      img.style.opacity = "0";
      img.style.transition = "opacity 0.3s ease";
      imageObserver.observe(img);
    });
  } else {
    // Fallback for older browsers
    images.forEach((img) => {
      img.style.opacity = "1";
    });
  }
}

// Scroll animations
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    ".stat-item, .step-card, .info-card",
  );

  if ("IntersectionObserver" in window) {
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "fadeInUp 0.6s ease forwards";
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    animatedElements.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(30px)";
      animationObserver.observe(element);
    });
  }
}

// Mobile menu functionality (if needed for responsive design)
function initMobileMenu() {
  // This would be used if we had a hamburger menu for mobile
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
      this.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (
        !mobileMenu.contains(e.target) &&
        !mobileMenuToggle.contains(e.target)
      ) {
        mobileMenu.classList.remove("active");
        mobileMenuToggle.classList.remove("active");
      }
    });
  }
}

// Notification system
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
        word-wrap: break-word;
    `;

  // Set background color based on type
  switch (type) {
    case "success":
      notification.style.backgroundColor = "#28a745";
      break;
    case "warning":
      notification.style.backgroundColor = "#ffc107";
      notification.style.color = "#212529";
      break;
    case "error":
      notification.style.backgroundColor = "#dc3545";
      break;
    default:
      notification.style.backgroundColor = "#007bff";
  }

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 5000);

  // Click to dismiss
  notification.addEventListener("click", function () {
    this.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    }, 300);
  });
}

// Form validation (if forms are added later)
function validateForm(form) {
  const inputs = form.querySelectorAll("input[required], textarea[required]");
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.classList.add("error");
      isValid = false;
    } else {
      input.classList.remove("error");
    }

    // Email validation
    if (input.type === "email" && input.value) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(input.value)) {
        input.classList.add("error");
        isValid = false;
      }
    }
  });

  return isValid;
}

// Utility function to debounce function calls
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Handle window resize
const handleResize = debounce(() => {
  // Recalculate any size-dependent elements
  console.log("Window resized");
}, 250);

window.addEventListener("resize", handleResize);

// Performance monitoring
window.addEventListener("load", function () {
  setTimeout(() => {
    const perfData = performance.timing;
    const loadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log("Page load time:", loadTime + "ms");
  }, 0);
});
