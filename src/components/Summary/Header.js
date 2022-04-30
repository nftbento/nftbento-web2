import PropTypes from 'prop-types'

const buttonTitle = 'Refresh'

export const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <div className='container'>
            <h1 style={headingStyle}>{title}</h1>
            <h4 style={descriptionStyle}>The hottest NFT collections on OpenSea right now</h4>
            <h5 style={detailInfoStyle}>Data loaded &lt; 1 min ago</h5>
        </div>
    )
}

Header.defaultProps = {
    title: '<Add title>'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

const headingStyle = {
    color: 'black',
    fontSize: 60,
    textAlign: 'center',
    fontWeight: 'bold'
}

const descriptionStyle = {
    color: 'grey',
    fontSize: 30,
    textAlign: 'center'
}

const detailInfoStyle = {
    color: 'grey',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40
}

const buttonStyle = {
    color: 'DodgerBlue',
    textAlign: 'center'
}
