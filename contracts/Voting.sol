// contracts/election.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract election {
    struct Proposal {
        uint256 id;
        string description;
        uint256 voteCount;
    }

    mapping(uint256 => Proposal) public proposals;
    uint256 public nextProposalId;
    mapping(address => bool) public voters;

    function createProposal(string memory _description) public {
        proposals[nextProposalId] = Proposal({
            id: nextProposalId,
            description: _description,
            voteCount: 0
        });
        nextProposalId++;
    }

    function vote(uint256 _proposalId) public {
        require(!voters[msg.sender], "You have already voted");
        Proposal storage proposal = proposals[_proposalId];
        proposal.voteCount++;
        voters[msg.sender] = true;
    }

    function getProposal(uint256 _proposalId) public view returns (Proposal memory) {
        return proposals[_proposalId];
    }
}