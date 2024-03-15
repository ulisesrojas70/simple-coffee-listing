import styled from "styled-components";
import Star from '../assets/images/Star.svg'
import Star_fill from '../assets/images/Star_fill.svg'

const StyeldProductCard = styled.div`
    position: relative;
    padding: 16px;
    margin: 8px;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
`

const Img = styled.img`
    border-radius: 7px;
`

const Label = styled.div`
    font-size: 14px;
    color: #FEF7EE;
    font-weight: bold;
`

const LabelPrice = styled(Label)`
    background-color: #BEE3CC;
    color: #111315;
    padding: 1px 7px;
    border-radius: 4px;
`

const LabelSmall = styled(Label)`
    font-size: 12px;
`

const LabelVotes = styled(Label)`
    font-size: 10px;
    color: #6F757C;
`

const ContainerPriceYLabel = styled.div`
    display: flex;
    justify-content: space-between;
`

const ContainerRatingYVotes = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.3rem;
`

const LabelAvailable = styled(LabelSmall)`
    color: #ED735D;
`
const Details = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`

const PopularLabel = styled.div`
    position: absolute;
    top: 25px;
    left: 25px;
    background-color: #F6C768;
    border-radius: 10px;
    font-size: 0.625rem;
    padding: 3px 7px;
    color: #111315;
    font-weight: bold;
`

const ProductCard = ({ product }) => {

    const renderStar = () => {
        if (product.popular) {
            return <img src={Star_fill}></img>
        } else {
            return <img src={Star}></img>
        }
    }

    const seeAvailability = () => {
        if (product.available) {
            return <></>
        } else {
            return <LabelAvailable>Sold Out</LabelAvailable>
        }
    }

    const noRatings = () => {
        if (product.votes == 0) {
            return <LabelVotes>(No Ratings)</LabelVotes>
        } else {
            return <LabelVotes>({product.votes} votes)</LabelVotes>
        }
    }

    const isPopular = () => {
        if (product.popular) {
            return <PopularLabel>Popular</PopularLabel>
        } else {
            return <></>
        }
    }

    return (
        <StyeldProductCard>
            {isPopular()}

            <Img src={product.image} alt={product.name} />

            <ContainerPriceYLabel>
                <Label>{product.name}</Label>
                <LabelPrice>{product.price}</LabelPrice>
            </ContainerPriceYLabel>

            <Details>
                <ContainerRatingYVotes>
                    {renderStar()}
                    <LabelSmall>{product.rating} </LabelSmall>
                    {noRatings()}
                </ContainerRatingYVotes>

                {seeAvailability()}

            </Details>
        </StyeldProductCard>
    )
}

export default ProductCard;