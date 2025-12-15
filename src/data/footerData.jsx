import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
export  const FooterData = {
            title : 'MMC Pharmaceuticals Ltd',
            description : `The History of MMC Pharmaceuticals Ltd dates back to 1987. Started as
                            a Partnership Company (Madras Medical Company) in 1987, converted to
                            a Public Limited Company as MMC Healthcare Ltd in 1997, and in 2016
                            demerged as MMC Pharmaceuticals Ltd. With a vision of creating an
                            everlasting organization in the Pharmaceuticals & Healthcare space,
                            backed by nearly 36 years of pharmaceutical experience.`,
            links : [
                {name:'Home',path:'/'},
                {name:'About Us',path:'/about'},
                {name:'Team',path:'/team'},
                {name:'Products',path:'/products'},
                {name:'Partners',path:'/partners'},
                {name:'Careers',path:'/career'},
                {name:'Contact Us',path:'/contactus'}
            ],
            address : `Regd. Office: MMC Pharmaceuticals Ltd,
                No.40,41,42, 1st Floor,
                Dhanalakshmi Nagar,
                Moulivakkam, Chennai – 600 125`,
            n1:'+91 044 2486 8412 / 8413 / 6348 / 6358',
            n2:'+91 95975 95975 / 98410 63388',
            email:'adminexe@mmcpharmaceuticals.com',
            certificate : 'WHO-GMP Certified Company',
            icons : [
                {name : 'Facebook',link:'https://www.facebook.com/mmcpharmaceuticalsindia',component : <FacebookIcon/>},
                {name : 'Instragram',link:'https://www.instagram.com/mmc_pharmaceuticals/',component : <InstagramIcon/>},
                {name:'LinkedIn',link:'https://www.linkedin.com/in/rajarathinam-malliah-managing-director-mmc-pharmaceuticals-ltd/',component:<LinkedInIcon/>},
                {name:'Youtube',link:'https://www.youtube.com/channel/UC5UuVY5XEujZYLniFIhoG3g',component:<YouTubeIcon/>}
            ],
            developedBy : 'Neralla Harish'

        }