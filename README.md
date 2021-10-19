### Movies Kingdom


### movieDetails

<Container>
  <Button onClick={() => setShowDetails(showDetails.false)}>
    <CrossIcon />
  </Button>
  <Modal>
    <Wrapper>
      <ImgBox>
        <Img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt="movie poster"
        />
      </ImgBox>
      <InfoBox>
        <Title>{title}</Title>
        <Tagline>{tagline}</Tagline>
        <InnerSection>
          <span>
            <b>Rating</b>: {vote_average}
          </span>
          <span>
            <b>Runtime</b>: {Math.floor(runtime / 60)}hr {runtime % 60}
            min
          </span>
        </InnerSection>
        <InnerSection>
          <span>
            <b>Budget</b>: {budget}
          </span>
          <span>
            <b>Release</b>: {release_date}
          </span>
        </InnerSection>
        <Overview>{overview}</Overview>
      </InfoBox>
    </Wrapper>
  </Modal>
</Container>


const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.8);
	z-index: 22;
`;

const Button = styled.button`
	position: fixed;
	top: 4%;
	left: 50%;
	transform: translate(-50%, -50%);
	border: 0px solid transparent;
	padding: 10px;
	background-color: #00950d;
	border-radius: 50%;
	cursor: pointer;
	& :hover {
		transition: all 0.5s ease-out;
		transform: rotate(360deg);
	}
`;
const CrossIcon = styled(GiCrossedBones)`
	font-size: 30px;
	color: red;
`;

const Modal = styled.div`
	position: fixed;
	background: gray;
	width: 80%;
	height: 80%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
`;
const ImgBox = styled.div`
	flex: 1;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
const Img = styled.img`
	width: 100%;
	height: 100%;
`;
const InfoBox = styled.div`
	flex: 2;
	display: flex;
	flex-direction: column;
	align-items: space-between;
	padding: 20px 40px;
`;
const Title = styled.h1``;
const Tagline = styled.h3``;
const InnerSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 0;

	& span {
		flex: 1;
	}
`;
const Overview = styled.p``;




