import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import MenuItem from './MenuItem'
import { motion } from 'framer-motion'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import Link from 'components/Link'

const Logo = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="30" fill="none" viewBox="0 0 150 30">
            <path
                fill="#fff"
                d="M0 18.2585L7.31322 25.5619H0V18.2585ZM0 16.4326L9.14153 25.5619H16.4547L0 9.12925V16.4326ZM0 7.3034L18.283 25.5619H25.5963L0 0V7.3034ZM9.14153 7.3034L27.4246 25.5619V18.2585L9.14153 0V7.3034ZM18.283 0V7.3034L27.4246 16.4326V9.12925L18.283 0Z"
            />
            <path
                fill="#fff"
                d="M43.8793 22.6406C42.0057 22.6406 40.2095 21.8971 38.8858 20.5752L28.7175 10.4205V25.5619H43.8793V22.6406Z"
            />
            <path
                fill="#000"
                d="M33.1055 22.6405C33.9133 22.6405 34.5681 21.9866 34.5681 21.1799C34.5681 20.3732 33.9133 19.7192 33.1055 19.7192C32.2977 19.7192 31.6428 20.3732 31.6428 21.1799C31.6428 21.9866 32.2977 22.6405 33.1055 22.6405Z"
            />
            <path fill="#fff" d="M0 25.5619H7.31322L0 18.2585V25.5619Z" />
            <path fill="#fff" d="M9.14153 9.12925L0 0V7.3034L9.14153 16.4326V9.12925Z" />
            <path fill="#fff" d="M0 9.12926V16.4327L9.14153 25.5619V18.2585L0 9.12926Z" />
            <path fill="#fff" d="M18.283 9.12925L9.14153 0V7.3034L18.283 16.4326V9.12925Z" />
            <path fill="#fff" d="M9.14153 25.5619H16.4547L9.14153 18.2585V25.5619Z" />
            <path fill="#fff" d="M9.14153 9.12926V16.4327L18.283 25.5619V18.2585L9.14153 9.12926Z" />
            <path
                fill="#fff"
                d="M73.4891 15.4511C73.4891 18.723 72.0235 20.9184 67.0754 20.9184H64.349V25.5619H61.3711V10.0057H67.0754C72.0235 10.0071 73.4891 12.1792 73.4891 15.4511ZM70.5111 15.4511C70.5111 13.5522 69.9158 12.7517 67.6019 12.7517H64.349V18.1738H67.6019C69.9158 18.1738 70.5111 17.2813 70.5111 15.4511Z"
            />
            <path
                fill="#fff"
                d="M74.978 19.6608C74.978 16.0689 76.9702 13.5522 80.6824 13.5522C84.3931 13.5522 86.3867 16.0689 86.3867 19.6608C86.3867 23.2526 84.3931 25.7912 80.6824 25.7912C76.9716 25.7912 74.978 23.2511 74.978 19.6608ZM83.4087 19.6608C83.4087 17.144 82.6994 16.2983 80.6824 16.2983C78.6668 16.2983 77.956 17.144 77.956 19.6608C77.956 22.1775 78.6654 23.0466 80.6824 23.0466C82.6979 23.0452 83.4087 22.1761 83.4087 19.6608Z"
            />
            <path
                fill="#fff"
                d="M88.3334 21.3303C90.4177 22.6347 91.9535 23.0466 93.6487 23.0466C94.7486 23.0466 95.2064 22.6113 95.2064 22.0402C95.2064 21.3771 94.7939 21.0572 92.9612 20.7592C89.3646 20.21 88.3334 18.7917 88.3334 16.9848C88.3334 14.6287 90.3036 13.5536 92.755 13.5536C94.2893 13.5536 96.1454 13.9656 97.2673 14.7426V17.4873C95.5955 16.6634 93.7862 16.2983 92.5254 16.2983C91.7004 16.2983 91.3114 16.5962 91.3114 17.1221C91.3114 17.6947 91.6097 18.0146 93.4424 18.4031C96.8782 19.1115 98.1844 19.8448 98.1844 22.1089C98.1844 24.4416 96.1001 25.7912 93.4191 25.7912C91.6317 25.7912 90.0052 25.448 88.3334 24.3276V21.3303Z"
            />
            <path
                fill="#fff"
                d="M104.139 16.5261V22.8173H107.276V25.5619H101.161V16.5261H99.3282V13.7815H101.161V9.54994H104.139V13.7815H107.276V16.5261H104.139Z"
            />
            <path
                fill="#fff"
                d="M123.06 10.0071V25.5634H120.082V19.3862H113.232V25.5634H110.254V10.0071H113.232V16.6415H120.082V10.0071H123.06Z"
            />
            <path
                fill="#fff"
                d="M125.352 19.6608C125.352 16.0689 127.344 13.5522 131.056 13.5522C134.767 13.5522 136.76 16.0689 136.76 19.6608C136.76 23.2526 134.767 25.7912 131.056 25.7912C127.345 25.7912 125.352 23.2511 125.352 19.6608ZM133.781 19.6608C133.781 17.144 133.071 16.2983 131.054 16.2983C129.039 16.2983 128.328 17.144 128.328 19.6608C128.328 22.1775 129.037 23.0466 131.054 23.0466C133.071 23.0452 133.781 22.1761 133.781 19.6608Z"
            />
            <path
                fill="#fff"
                d="M150 13.7815V29.2224H140.608V26.4777H147.022V23.2745C146.335 24.0296 145.327 24.6475 143.677 24.6475C140.241 24.6475 138.591 22.0621 138.591 19.0882C138.591 16.1376 140.241 13.5522 143.677 13.5522C145.327 13.5522 146.335 14.1701 147.022 15.0392V13.7815H150ZM147.022 19.0882C147.022 17.3266 146.313 16.2968 144.296 16.2968C142.28 16.2968 141.569 17.3266 141.569 19.0882C141.569 20.8731 142.28 21.9014 144.296 21.9014C146.311 21.9014 147.022 20.9871 147.022 19.0882Z"
            />
        </svg>
    )
}

export default function MainNav({ expanded }) {
    const data = useStaticQuery(graphql`
        query MainNavQuery {
            navsJson {
                main {
                    title
                    url
                    classes
                    sub {
                        title
                        description
                        items {
                            title
                            link {
                                title
                                url
                            }
                            sections {
                                link {
                                    title
                                    url
                                }
                                title
                                items {
                                    icon
                                    title
                                    url
                                }
                            }
                            footerLinks {
                                title
                                url
                            }
                        }
                    }
                }
            }
        }
    `)
    const menu = data?.navsJson?.main
    const breakpoints = useBreakpoint()
    const variants = {
        hidden: { height: 0 },
        shown: { height: 'auto' },
    }
    const menuLength = menu.length
    const halfMenu = Math.ceil(menuLength / 2)
    return (
        (expanded || !breakpoints.md) && (
            <motion.nav
                className="lg:static absolute w-full left-0 top-full lg:overflow-visible overflow-hidden hidden lg:block"
                variants={breakpoints.md && variants}
                initial="hidden"
                animate="shown"
            >
                <ul className="z-50 flex justify-between lg:items-center items-start flex-col lg:flex-row lg:space-x-12 space-x-0 lg:space-y-0 space-y-6 bg-[#220f3f] lg:bg-transparent list-none  mb-0 font-nav lg:px-0 px-5 lg:py-0 py-5 text-white lg:dark:text-white lg:text-almost-black max-w-screen-2xl mx-auto">
                    {menu.map((menuItem, index) => {
                        return (
                            <>
                                <MenuItem key={index} menuItem={menuItem} />
                                {index + 1 === halfMenu && (
                                    <li style={{ margin: '0 auto' }} className="w-full justify-center hidden lg:flex">
                                        <Link to="/">
                                            <Logo />
                                        </Link>
                                    </li>
                                )}
                            </>
                        )
                    })}
                </ul>
            </motion.nav>
        )
    )
}
