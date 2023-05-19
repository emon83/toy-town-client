const CateGoryToyDetails = ({ scienceToys }) => {
  console.log(scienceToys);
  return (
    <div>
      {scienceToys.map((toy) => (
        <div key={toy._id}>
          <input type="checkbox" id="my-modal-5" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <h3 className="font-bold text-lg">
                {toy?.toyName}
              </h3>
              <img src={toy?.toyImage} alt="" />
              <p className="py-4">
                You have been selected for a chance to get one year of
                subscription to use Wikipedia for free!
              </p>
              <div className="modal-action">
                <label htmlFor="my-modal-5" className="btn">
                  Yay!
                </label>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CateGoryToyDetails;
