import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import {HamburgerMenu} from "../components/Header/HamburgerMenu";
import AnimatedMenu from "../components/Header/AnimatedMenu";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Sawka Promo"
      meta={[
        { name: 'description', content: 'Ewa Dziadosz' },
        { name: 'keywords', content: 'marketing' },
      ]}
    />
    {/*<Header />*/}
    <HamburgerMenu/>
    <AnimatedMenu />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
