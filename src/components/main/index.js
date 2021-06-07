import Container from '../containers/Container'
import PageHeading from '../PageHeading'    
import FirstSection from '../sections/FirstSection'
import SecondSection from '../sections/SecondSection'

export default function Main(){
    return (

            <Container classes="container-fluid">
            	<PageHeading />
                <Container classes="row">
                    <FirstSection />
                  <Container classes="row">
                    <SecondSection />
                  </Container>
                </Container>
          	</Container>
        )
}