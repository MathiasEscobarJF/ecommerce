function DetailsData({detailsData}){
    const details = Object.values(detailsData).map((d,i) => <p key={i}>{d}</p>);
    return(
        <>
            {details}
        </>
    )
}

export default DetailsData;