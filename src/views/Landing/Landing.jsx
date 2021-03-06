import React from 'react'

import {Button, Typography} from 'antd'

import squiggle from '../../assets/fancy-squiggle.svg'

import heroImage from '../../assets/site-bg.png'

import {Link} from 'react-router-dom'

import {motion} from 'framer-motion'

import useMedia from '../shared/useMedia'

import {use100vh} from 'react-div-100vh'


const {Title, Text} = Typography

const Landing = () => {

    const mobile = useMedia(['(min-width: 750px)', '(max-width: 750px)'], [false, true])

    const vh = use100vh()

    return(
        <div style={{overflowX: 'hidden',height: vh - 70, width: "100%", background: "#fefefe", position: 'static', display: 'flex', alignItems: 'center' }}>
                       
            <div style={{display: 'flex', justifyContent: 'space-between',  width: '100%', flexWrap: 'wrap'}}>
                <div style={{width: mobile ? '90% ':"45%", display: 'flex', alignItems: 'center', justifyContent: 'center',marginTop: mobile ? '30px':'0px',  marginLeft: mobile ? '15px' : '0px'}}>
                    <div style={{paddingBottom: mobile ? '0px':'30px',}}>
                        <Title level={2} style={{fontSize: '28px', marginBottom: '5px'}}>Student Built.</Title>
                        <Text>Building custom software solutions to connect HSE.</Text>
                        <br/>
                        <Link to="/products"><Button type="primary" style={{marginTop: '20px'}}>View Products</Button></Link>
                    </div>

                </div>

                <div style={{width: mobile ? '100%' :"45%",  height: '100%', display: 'flex',marginTop: mobile ? '50px' : '',justifyContent: mobile ? 'flex-end' : '', alignItems:'flex-start',}}>
                    <motion.img initial={{x: '30%'}} animate={{x: 0, transition: {duration: 0.5, type: 'spring', stiffness: '90'}}} src={heroImage} style={{filter: 'hue-rotate(-10deg)',maxWidth: '900px', width: mobile ? '100%':'160%', position: 'relative', left: mobile ? '10%': '-20%'}}></motion.img>

                </div>
            </div>
           
        </div>
    )
}

export default Landing