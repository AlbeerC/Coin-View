import { Spinner } from '@chakra-ui/react'

const styles = {
    minHeight: 600,
    margin: '10 auto'
}

function Loading () {

    return (
        <div className="loading" style={styles}>
        <Spinner
            thickness='5px'
            speed='0.65s'
            emptyColor='black'
            color='yellow'
            size='xl'
        />
    </div>
    )
}

export default Loading