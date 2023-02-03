import PropTypes from 'prop-types';

function Section({ children, title }) {
    return (
        
        <div>
            <h1 className="title">{ title}</h1>
            {children}
        </div>
    )
}

export default Section;

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}