import React, { useState, useEffect } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faFacebookSquare,
  faSquareXTwitter,
  faLinkedin,
  faYoutubeSquare
} from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from '../images/NOVATALES F3.png'
import { Link } from 'react-router-dom'
import '../css/Home.css'
import '../css/HomeMediaQuery.css'
import { useNavigation } from '../components/NavigationContext'
import { useLocation } from 'react-router-dom'
const Header = () => {
  // Import the useNavigation hook and destructure the currentPage and handleNavigation variables
  const { currentPage, handleNavigation } = useNavigation()
  const location = useLocation()

  useEffect(() => {
    const path =
      location.pathname === '/'
        ? 'home'
        : location.pathname === '/healthcare'
        ? 'HealthCare'
        : location.pathname.slice(1)

    handleNavigation(path) // Update the currentPage based on the current path
  }, [location])

  // State variables
  const [showDropdown, setShowDropdown] = useState(false) // Dropdown visibility
  const [showIndustries, setShowIndustries] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false) // Header scroll state
  const [expanded, setExpanded] = useState(false) // Navbar expanded state
  const [latestPostLink, setLatestPostLink] = useState('') //blogs
  // Handle mouse enter event to show dropdown
  const handleMouseEnter = () => {
    setShowDropdown(true)
  }
  // Handle mouse enter event to show dropdown
  const handleMouseEnterIndustries = () => {
    setShowIndustries(true)
  }

  // Handle mouse leave event to hide dropdown
  const handleMouseLeave = () => {
    setShowDropdown(false)
    // setShowIndustries(false)
  }
  // Handle mouse leave event to hide dropdown
  const handleMouseLeaveIndustries = () => {
    setShowIndustries(false)
  }
  // Handle navigation collapse
  const handleNavCollapse = () => {
    setExpanded(false)
    setShowDropdown(false)
    // setShowIndustries(false)
  }

  // Add event listener for scroll
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header')
      const isScrolled = window.scrollY > 0
      header.classList.toggle('scrolled', isScrolled)
      setIsScrolled(isScrolled)
    }

    // Handle click outside event to collapse navbar
    const handleClickOutside = event => {
      const navbar = document.querySelector('.navbar')
      if (navbar && !navbar.contains(event.target)) {
        setExpanded(false)
      }
    }

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll)
    // Add event listener for click outside
    document.addEventListener('click', handleClickOutside)

    return () => {
      // Remove event listener for scroll
      window.removeEventListener('scroll', handleScroll)
      // Remove event listener for click outside
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  //fetching blogs
  useEffect(() => {
    // Fetch the latest post from the WordPress API
    fetch('https://novatales.com/blog/wp-json/wp/v2/posts?per_page=1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts')
        }
        return response.json()
      })
      .then(data => {
        if (data.length > 0) {
          setLatestPostLink(data[0].link) // Set the latest post link in state
        }
      })
      .catch(error => {
        console.error('Error fetching latest post:', error)
      })
  }, [])
  return (
    <header
      className={`menubar ${currentPage} ${isScrolled ? 'scrolled' : ''}`}
    >
      <Navbar expand='lg' className='navbar' expanded={expanded}>
        <Container fluid>
          <Navbar.Brand
            as={Link}
            to='/'
            className='Logo'
            onClick={() => {
              handleNavigation('home')
              handleNavCollapse()
            }}
          >
            <img src={Logo} alt='best digital marketing company' width='100px' />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls='navbarSupportedContent'
            onClick={() => setExpanded(expanded ? false : true)}
          />
          <Navbar.Collapse id='navbarSupportedContent'>
            <Nav className='ms-auto'>
              <Nav.Link
                as={Link}
                to='/'
                onClick={() => {
                  handleNavigation('home')
                  handleNavCollapse()
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to='/about'
                onClick={() => {
                  handleNavigation('about')
                  handleNavCollapse()
                }}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to='/technologies'
                onClick={() => {
                  handleNavigation('about')
                  handleNavCollapse()
                }}
              >
                Technologies
              </Nav.Link>
              <NavDropdown
                title='Services'
                id='navbarScrollingDropdown'
                show={showDropdown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='megaDropdown'
              >
                <div className='box-down'>
                  <Container fluid>
                    <div className='row'>
                      <div className='col-xl-3 col-lg-4 col-sm-6 '>
                        <h2>
                          <NavDropdown.Item
                            as={Link}
                            to='/branding-and-marketing'
                            onClick={() => {
                              handleNavigation('about')
                              handleNavCollapse()
                            }}
                          >
                            Branding
                          </NavDropdown.Item>
                        </h2>
                        <ul>
                          <NavDropdown.Item
                            as={Link}
                            to='/branding-and-marketing'
                            onClick={() => {
                              handleNavigation('about')
                              handleNavCollapse()
                            }}
                          >
                            Branding strategy & Planning
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            to='/brand-positioning'
                            onClick={() => {
                              handleNavigation('about')
                              handleNavCollapse()
                            }}
                          >
                            Brand Positioning
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            to='/logo-designing'
                            onClick={() => {
                              handleNavigation('about')
                              handleNavCollapse()
                            }}
                          >
                            Logo & Visual Elements
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            to='/logo-question'
                            onClick={() => {
                              handleNavigation('about')
                              handleNavCollapse()
                            }}
                          >
                            LOGO DESIGN QUESTIONNAIRE
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            to='/brand-and-packaging-design'
                            onClick={() => {
                              handleNavigation('about')
                              handleNavCollapse()
                            }}
                          >
                            Packaging Design & Production
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            to='/marketing-and-advertising'
                            onClick={() => {
                              handleNavigation('about')
                              handleNavCollapse()
                            }}
                          >
                            Advertising & Marketing Materials
                          </NavDropdown.Item>
                        </ul>
                      </div>
                      <div className='col-xl-3 col-lg-4 col-sm-6 ps-lg-4 DigitalRow'>
                        <h2>
                          <NavDropdown.Item
                            as={Link}
                            to='/digital-marketing'
                            onClick={() => {
                              handleNavigation('about')
                              handleNavCollapse()
                            }}
                          >
                            Digital Marketing
                          </NavDropdown.Item>
                        </h2>
                        <ul>
                          <NavDropdown.Item
                            as={Link}
                            to='/search-engine-optmization-marketing'
                            onClick={() => {
                              handleNavigation('about')
                              handleNavCollapse()
                            }}
                          >
                            Search Engine Optimization
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            to='/social-media-marketing'
                            onClick={() => {
                              handleNavigation('about')
                              handleNavCollapse()
                            }}
                          >
                            Social media marketing
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            to='/google-analytics-search-console'
                            onClick={() => {
                              handleNavigation('about')
                              handleNavCollapse()
                            }}
                          >
                            Analytics & Business Insights
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            to='/ppc-advertising'
                            onClick={() => {
                              handleNavigation('about')
                              handleNavCollapse()
                            }}
                          >
                            Paid Advertising
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            to='/email-marketing'
                            onClick={() => {
                              handleNavigation('about')
                              handleNavCollapse()
                            }}
                          >
                            Email marketing
                          </NavDropdown.Item>
                        </ul>
                      </div>
                      <div className='col-xl-3 col-lg-4 col-sm-12'>
                        <div className='row'>
                          <div className='col-lg-12 col-md-6'>
                            <h2>
                              <NavDropdown.Item
                                as={Link}
                                to='/website-development'
                                onClick={() => {
                                  handleNavigation('about')
                                  handleNavCollapse()
                                }}
                              >
                                Web & App Development
                              </NavDropdown.Item>
                            </h2>
                            <ul>
                              <NavDropdown.Item
                                as={Link}
                                to='/ui-ux-design-development'
                                onClick={() => {
                                  handleNavigation('about')
                                  handleNavCollapse()
                                }}
                              >
                                UI / UX Design
                              </NavDropdown.Item>
                              <NavDropdown.Item
                                as={Link}
                                to='/mobile-application-development'
                                onClick={() => {
                                  handleNavigation('about')
                                  handleNavCollapse()
                                }}
                              >
                                Mobile App Development
                              </NavDropdown.Item>
                              <NavDropdown.Item
                                as={Link}
                                to='/e-commerce-web-development'
                                onClick={() => {
                                  handleNavigation('about')
                                  handleNavCollapse()
                                }}
                              >
                                Ecommerce
                              </NavDropdown.Item>
                            </ul>
                          </div>
                          <div className='col-lg-12 col-md-6'>
                            <h2>
                              <NavDropdown.Item
                                as={Link}
                                to='/content-creation-and-marketing'
                                onClick={() => {
                                  handleNavigation('about')
                                  handleNavCollapse()
                                }}
                              >
                                Content Marketing
                              </NavDropdown.Item>
                            </h2>
                            <ul>
                              <NavDropdown.Item
                                as={Link}
                                to='/content-creation-and-marketing'
                                onClick={() => {
                                  handleNavigation('about')
                                  handleNavCollapse()
                                }}
                              >
                                Content creation and strategy
                              </NavDropdown.Item>
                              <NavDropdown.Item
                                as={Link}
                                to='/podcast-editing-hosting'
                                onClick={() => {
                                  handleNavigation('about')
                                  handleNavCollapse()
                                }}
                              >
                                Podcast planning & Production
                              </NavDropdown.Item>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='col-xl-3 col-lg-4 col-sm-6'>
                        <h2>
                          {' '}
                          <NavDropdown.Item
                            as={Link}
                            to='/video-production'
                            onClick={() => {
                              handleNavigation('about')
                              handleNavCollapse()
                            }}
                          >
                            Video Production
                          </NavDropdown.Item>
                        </h2>
                        <ul>
                          <NavDropdown.Item
                            as={Link}
                            to='/professional-photoshoot'
                            onClick={() => {
                              handleNavigation('about')
                              handleNavCollapse()
                            }}
                          >
                            Photoshoots
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            to='/green-screen-studio-rent'
                            onClick={() => {
                              handleNavigation('about')
                              handleNavCollapse()
                            }}
                          >
                            GreenScreen Studio Rentals
                          </NavDropdown.Item>
                        </ul>
                      </div>
                    </div>
                  </Container>
                </div>
              </NavDropdown>
              <Nav.Link
                as={Link}
                to={latestPostLink}
                target='blank'
                onClick={() => {
                  handleNavCollapse()
                }}
              >
                Blog
              </Nav.Link>
              {/* <NavDropdown title="Industries" id="industries-dropdown"
               show={showIndustries} // Use state to control visibility
               onMouseEnter={handleMouseEnterIndustries}
               onMouseLeave={handleMouseLeaveIndustries}
               >
                <NavDropdown.Item
                  as={Link}
                  to="/#Our-Clients"
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      e.preventDefault(); // Prevent default behavior
                      const element = document.getElementById('Our-Clients');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                      handleNavCollapse(); // Call your collapse function
                    } else {
                      handleNavigation('home'); // Navigate to the home page
                      handleNavCollapse();
                    }
                  }}
                >
                  Clients
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/HealthCare"
                  onClick={() => { handleNavigation('HealthCare'); handleNavCollapse(); }}
                >
                  Health Care
                </NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link
                as={Link}
                to='/#Our-Clients'
                onClick={e => {
                  if (window.location.pathname === '/') {
                    e.preventDefault() // Prevent default behavior
                    const element = document.getElementById('Our-Clients')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                    handleNavCollapse() // Call your collapse function
                  } else {
                    handleNavigation('home') // Navigate to the home page
                    handleNavCollapse()
                  }
                }}
              >
                Clients
              </Nav.Link>
              <Nav.Link
                as={Link}
                to='/contactus'
                onClick={() => {
                  handleNavigation('about')
                  handleNavCollapse()
                }}
              >
                Contact
              </Nav.Link>
            </Nav>
            <div className='d-flex ms-auto'>
              <div className='social-icons'>
                <div className='row'>
                  <div className='col-2'>
                    <Link
                      to='https://www.instagram.com/novatalesmedia/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className='fa-brands'
                      />
                    </Link>
                  </div>
                  <div className='col-2'>
                    <Link
                      to='https://www.facebook.com/novatalesdigital'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FontAwesomeIcon
                        icon={faFacebookSquare}
                        className='fa-brands'
                      />
                    </Link>
                  </div>
                  <div className='col-2'>
                    <Link
                      to='https://twitter.com/novatalesmedia'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FontAwesomeIcon
                        icon={faSquareXTwitter}
                        className='fa-brands'
                      />
                    </Link>
                  </div>
                  <div className='col-2'>
                    <Link
                      to='https://www.linkedin.com/company/novatales/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className='fa-brands'
                      />
                    </Link>
                  </div>
                  <div className='col-2'>
                    <Link
                      to='https://www.youtube.com/@NovaTalesMedia'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FontAwesomeIcon
                        icon={faYoutubeSquare}
                        className='fa-brands'
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
