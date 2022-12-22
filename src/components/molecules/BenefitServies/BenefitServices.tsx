import React from "react";

const BenefitServices = ({ benefitServices }) => {
  return (
    <>
      <div>
        {benefitServices && benefitServices?.length > 0 && (
          <div class="row" style={{ "justify-content": "center" }}>
            {benefitServices.map((service, index) => {
              return (
                <>
                  <div class="row" style={{ "justify-content": "center" }}>
                    <div class="card col-md-3 col-12">
                      <div class="card-content">
                        <div class="card-body">
                          <img class="img" src={service.imageUrl} />
                          <div class="shadow"></div>
                          <div class="card-title"> {service.name} </div>
                          <div class="card-subtitle">
                            <p>
                              <small class="text-muted">
                                {service.description.join("\n")}
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
      <div class="row" style={{ "justify-content": "center" }}>
        <div class="card col-md-3 col-12">
          <div class="card-content">
            <div class="card-body">
              <img class="img" src="https://i.imgur.com/S7FJza5.png" />
              <div class="shadow"></div>
              <div class="card-title"> Great savings </div>
              <div class="card-subtitle">
                <p>
                  <small class="text-muted">
                    We spent thousands of hours creating on algorithm that does
                    this for you in seconds. We collect a small fee from the
                    professional after they meet your
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card col-md-3 col-12 ml-2">
          <div class="card-content">
            <div class="card-body">
              <img class="img" src="https://i.imgur.com/xUWJuHB.png" />
              <div class="card-title"> We're Unbiased </div>
              <div class="card-subtitle">
                <p>
                  <small class="text-muted">
                    We don't accept ads from anyone. We use actual data to match
                    you who the best person for each job
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card col-md-3 col-12 ml-2">
          <div class="card-content">
            <div class="card-body">
              <img class="img rck" src="https://i.imgur.com/rG3CGn3.png" />
              <div class="card-title"> We Guide you </div>
              <div class="card-subtitle">
                <p>
                  <small class="text-muted">
                    Buying or selling a home is often the largest transaction
                    anyone does in their life. we guide you through the process
                    so that you can be confident in reaching your dream outcome.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BenefitServices;
