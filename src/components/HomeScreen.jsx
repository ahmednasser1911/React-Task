import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectedContent, setContent } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const contents = useSelector((state) => state.content.contents);
  let selected = useSelector((state) => state.selectedContent);

  useEffect(() => {
    dispatch(
      setContent([
        {
          id: 1,
          name: "هذا هو العنوان",
          desc: "هناك حقيقة مثبتة منذ زمن طويل و عى ان المحتوى المقروء لصفحة ",
          image: "../images/airpods.jpg",
        },
        {
          id: 2,
          name: "هذا هو العنوان",
          desc: "من تهيب صعود الجبال يبقى ابد الدهر بين الحفر ",
          image: "../images/alexa.jpg",
        },
        {
          id: 3,
          name: "هذا هو العنوان",
          desc: " ان العيون التى فى طربفها حور قتلننا ولم يحيينا قتلانا",
          image: "../images/camera.jpg",
        },
        {
          id: 4,
          name: "هذا هو العنوان",
          desc: " يصرعن ذا اللب لا حراك به وهن اضعف خلق الله انسانا",
          image: "../images/phone.jpg",
        },
      ])
    );
    dispatch(
      selectedContent({
        id: 1,
        name: "هذا هو العنوان",
        desc: "هناك حقيقة مثبتة منذ زمن طويل و عى ان المحتوى المقروء لصفحة ",
        image: "../images/airpods.jpg",
      })
    );
  }, [dispatch]);
  return (
    <React.Fragment>
      <div className="containerm p-2">
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div class="card-header text-center bg-warning mb-2 shadow rounded">
                الأكـــــثـــــر قـــــراءة
              </div>
              <ul
                class="list-group list-group-flush"
                style={{ marginLeft: "20px", marginRight: "20px" }}
              >
                {contents.map((item) => {
                  return (
                    <li
                      key={item.id}
                      class="list-group-item mb-2 mt-2  shadow p-2 rounded"
                    >
                      <div className="container">
                        <div
                          style={{ cursor: "pointer", paddingLeft: "10px" }}
                          className="row"
                          onClick={() => {
                            dispatch(selectedContent(item));
                          }}
                        >
                          <div className="col-8 text-end">
                            {item.name}
                            <footer style={{ fontSize: ".8rem" }}>
                              8:20 AM
                            </footer>
                          </div>
                          <div className="col-4 ">
                            <img
                              style={{
                                width: "50px",
                                height: "50px",
                                border: "1px solid gray",
                                borderRadius: "10px",
                              }}
                              src={
                                item.image
                                  ? item.image
                                  : "../images/airpods.jpg"
                              }
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="card">
              <div className="container">
                <div className="row">
                  <img src={selected.image} alt="" style={{ width: "100%" }} />
                  <div
                    style={{ marginTop: "-40px" }}
                    className="btn-toolbar justify-content-between"
                    role="toolbar"
                    aria-label="Toolbar with button groups"
                  >
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="First group"
                    >
                      {contents.map((item) => (
                        <button
                          onClick={() => {
                            dispatch(selectedContent(item));
                          }}
                          type="button"
                          className="btn btn-outline-warning"
                        >
                          {item.id}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="row" style={{ height: "70px" }}>
                  <div className="col-md-4">
                    <footer>--2/8/1997</footer>
                  </div>
                  <div
                    className="col-md-8 text-end"
                    style={{ fontSize: "1.5rem" }}
                  >
                    {selected.desc}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>

    /* <Row
      //   style={{
      //     height: "100vh",
      //     fontFamily: "Arial",
      //     fontWeight: "bold",
      //     margin: "10px",
      //   }}
      // >
      //   <Col md={4}>
      //     <Card style={{ height: "100%" }}>
      //       <Card.Header
      //         className="text-center bg-warning"
      //         style={{
      //           color: "black",
      //           padding: "1px",
      //           fontSize: "1rem",
      //           backgroundColor: "#EFEF10",
      //           height: "30px",
      //           textAlign: "center",
      //         }}
      //       >
      //         الاكـــثــر قـــراءة
      //       </Card.Header>
      //       <ListGroup
      //         style={{ height: "100%", cursor: "pointer", margin: "10px" }}
      //         varient="flush"
      //       >
      //         {contents.map((item) => (
      //           <ListGroup.Item
      //             key={item.id}
      //             style={{ maxWidth: "400px", height: "180px" }}
      //             className="shadow p-3 mb-5 bg-white rounded"
      //             onClick={() => {
      //               dispatch(
      //                 selectedContent({
      //                   image: item.image,
      //                   name: item.name,
      //                   desc: item.desc,
      //                 })
      //               );
      //             }}
      //           >
      //             <Card.Body>
      //               <div
      //                 style={{
      //                   display: "flex",
      //                   justifyContent: "space-between",
      //                   alignItems: "center",
      //                   marginTop: "-10px",
      //                 }}
      //               >
      //                 <div
      //                   style={{
      //                     padding: "5px",
      //                     width: "50%",
      //                     textAlign: "right",
      //                     fontSize: "1rem",
      //                   }}
      //                 >
      //                   <Card.Title>
      //                     <Button variant="warning" size="sm">
      //                       {item.id}
      //                     </Button>
      //                   </Card.Title>
      //                   <Card.Text>{item.name}</Card.Text>
      //                   <footer className="blockquote-footer">
      //                     <cite title="Source Title">02/08/2020-- </cite>
      //                     <cite
      //                       style={{
      //                         fontSize: "0.8rem",
      //                       }}
      //                       title="Source Title"
      //                     >
      //                       08:40 AM
      //                     </cite>
      //                   </footer>
      //                 </div>
      //                 <div
      //                   style={{
      //                     padding: "5px",
      //                     width: "50%",
      //                     textAlign: "right",
      //                   }}
      //                 >
      //                   <Card.Img
      //                     src={item.image}
      //                     className="shadow bg-white rounded"
      //                   />
      //                 </div>
      //               </div>
      //             </Card.Body>
      //           </ListGroup.Item>
      //         ))}
      //       </ListGroup>
      //     </Card>
      //   </Col>

      //   <Col md={8}>
      //     <Card style={{ height: "100%", margin: "0 5px", border: "none" }}>
      //       <ListGroup style={{ height: "100%" }} varient="flush">
      //         <ListGroup.Item
      //           style={{
      //             height: "52%",
      //           }}
      //         >
      //           <div
      //             style={{
      //               display: "flex",
      //               flexDirection: "column",
      //               // backgroundImage: `url(" + "../images/airpods.jpg" + ")`,
      //               // backgroundPosition: "center",
      //               // backgroundSize: "cover",
      //               // backgroundRepeat: "no-repeat",
      //             }}
      //           >
      //             <img
      //               src={
      //                 selected.image ? selected.image : "../images/airpods.jpg"
      //               }
      //               alt={selected.name}
      //               style={{
      //                 height: "490px",
      //                 //   backgroundPosition: "center",
      //                 //   backgroundSize: "cover",
      //                 //   backgroundRepeat: "no-repeat",
      //               }}
      //             />
      //             <ul
      //               style={{
      //                 listStyle: "none",
      //                 display: "flex",
      //                 justifyContent: "space-between",
      //                 marginTop: "-50px",
      //                 marginLeft: "-20px",
      //                 width: "200px",
      //               }}
      //             >
      //               {contents.map((item) => {
      //                 return (
      //                   <li
      //                     style={{
      //                       margin: "1px",
      //                     }}
      //                   >
      //                     <Button
      //                       variant="outline-warning"
      //                       style={{
      //                         color: "black",
      //                       }}
      //                       onClick={() => {
      //                         dispatch(
      //                           selectedContent({
      //                             image: item.image,
      //                             name: item.name,
      //                             desc: item.desc,
      //                           })
      //                         );
      //                       }}
      //                     >
      //                       {item.id}
      //                     </Button>
      //                   </li>
      //                 );
      //               })}
      //             </ul>
      //           </div>
      //         </ListGroup.Item>
      //         <ListGroup.Item style={{ height: "10%", textAlign: "right" }}>
      //           {selected.desc
      //             ? selected.desc
      //             : "من تهيب صعود الجبال يبقى ابد الدهر بين الحفر "}
      //           <div style={{ textAlign: "left" }}>
      //             <footer className="blockquote-footer">
      //               <cite title="Source Title">02/08/2020-- </cite>
      //               <cite
      //                 style={{
      //                   fontSize: "0.8rem",
      //                 }}
      //                 title="Source Title"
      //               >
      //                 08:40 AM
      //               </cite>
      //             </footer>
      //           </div>
      //         </ListGroup.Item>
      //       </ListGroup>
      //     </Card>
      //   </Col>
      // </Row> */
  );
};

export default HomeScreen;
