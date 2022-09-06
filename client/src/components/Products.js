// import { useDispatch } from "react-redux";
// import { useLocation } from "react-router-dom";
// import { publicRequest } from "../requestMethods";


// return (
//     <Container>
//       <Navbar />
//       <Announcement />
//       <Wrapper>
//         <ImgContainer>
//           <Image src={product.img} />
//         </ImgContainer>
//         <InfoContainer>
//           <Title>{product.title}</Title>
//           <Desc>{product.desc}</Desc>
//           <Price>$ {product.price}</Price>
//           <FilterContainer>
//             <Filter>
//               <FilterTitle>Color</FilterTitle>
//               {product.color?.map((c) => (
//                 <FilterColor color={c} key={c} onClick={() => setColor(c)} />
//               ))}
//             </Filter>
//             <Filter>
//               <FilterTitle>Size</FilterTitle>
//               <FilterSize onChange={(e) => setSize(e.target.value)}>
//                 {product.size?.map((s) => (
//                   <FilterSizeOption key={s}>{s}</FilterSizeOption>
//                 ))}
//               </FilterSize>
//             </Filter>
//           </FilterContainer>
//           <AddContainer>
//             <AmountContainer>
//               <Remove onClick={() => handleQuantity("dec")} />
//               <Amount>{quantity}</Amount>
//               <Add onClick={() => handleQuantity("inc")} />
//             </AmountContainer>
//             <Button onClick={handleClick}>ADD TO CART</Button>
//           </AddContainer>
//         </InfoContainer>
//       </Wrapper>
//       <Newsletter />
//       <Footer />
//     </Container>
//   );
// };

// export default Product;