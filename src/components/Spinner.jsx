import styled from '@emotion/styled';
import '../styles/Spinner.css';

const SpinnerWrapper = styled.div`
  margin: 30px auto;
`

const Spinner = () => {
  return (
    <SpinnerWrapper className="sk-chase">
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
    </SpinnerWrapper>
  )
}

export default Spinner