import React from 'react';

const ProposalDetail = () => {
  return (
    <div className="flex">
      <div className="w-2/3">
        <h1>Sushi Legal Structure [Signal]</h1>
        <p>Closed</p>
        <p>Sushi Sushi by sushigov.eth Core</p>
        <p>
          This proposal’s expectation is to produce a community signal. Full
          details and discussions thus far can be found at:
          https://forum.sushi.com/t/sushi-legal-structure/9720 Synopsis: Sushi
          is seeking input from the community on the formation of an association
          or foundation in order to mitigate future risks. This will help us
          provide legal clarity, limit liability, and create an apparatus to
          manage administrative issues for Sushi with regards for all token
          holders and contributors. Initial estimated budget for the setup is
          $85k - $100k. With a recurring cost of $10k. As this is a signal vote,
          this proposal is designed to indicate a signal for Sushi to progress
          or not in the direction of forming a Swiss Association. The details of
          the Association's members and their responsibilities, general legal
          council, and the types of operational entities that can interact with
          the Association will be fleshed out before the Implementation vote,
          should this Signal proposal pass.
        </p>
      </div>
      <div className="w-1/3">
        <section>
          <h3>Information</h3>
        </section>

        <section>
          <h3>Result</h3>
          <ul>
            <li>Yay : 6.3M SUSHIP... 99.95%</li>
            <li>Nay : 2.5K SUSHIP... 0.04%</li>
            <li>Abstain : 441 SUSHIP... 0.01%</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ProposalDetail;
