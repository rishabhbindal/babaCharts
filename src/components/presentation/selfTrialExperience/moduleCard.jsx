import React from 'react';
import styled from 'styled-components';

const StyledModuleCard = styled.div`
  height: 13.91em;
  background-color: #fff;
  border: 1px solid #28328c;
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  box-shadow: 0 0 24px 0 #f0f0f6;
  border: ${props => (props.moduleSelected ? '1px solid #28328c' : '1px solid rgba(202, 202, 211, 0.5)')};

  &:hover { 
    border: solid 1px #28328c;
  }
`;

const ModuleIllustration = styled.img`
  padding: 3.6em 0;
  width: 8.1em;
`;

const ModuleDetails = styled.div`
  display: flex;
  height: 100%;
`;

const ModuleName = styled.p`
  font-size: 1.4em;
  font-weight: bold;
  line-height: 1.41;
  color: #28328c;
  margin-top: .75em;
  margin-bottom: .85em;
  @media only screen and (max-width: 768px) {
    font-size: 1.1em;
  }
`;

const ModuleDescription = styled.p`
  font-size: 1.2em;
  line-height: 1.57;
  color: #787887;
  @media only screen and (max-width: 768px) {
    font-size: .9em;
  }
`;

const ModuleIllustrationBlock = styled.div`
  padding: 0 1.5em;
  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;

const ModuleOfferingsBlock = styled.div`
  padding-top: 2.8em;
  padding-right: 1.5em;
`;

const ModuleSelect = styled.img`
  position: absolute;
  top: -1em;
  right: -1em;
`;

const ModuleCard = props => (
  <StyledModuleCard
    onClick={() => props.toggleSelectModule(props.module.moduleName)}
    moduleSelected={props.moduleSelected}
  >
    {props.moduleSelected &&
      <ModuleSelect src={'/react-apps/images/selftrialexperience/green-tick.svg'} />
    }
    <ModuleDetails>
      <ModuleIllustrationBlock>
        <ModuleIllustration src={`/react-apps/images/selftrialexperience/onboarding-${props.module.moduleName}.svg`} />
      </ModuleIllustrationBlock>
      <ModuleOfferingsBlock>
        <ModuleName>
          {props.module.header}
        </ModuleName>
        <ModuleDescription>
          {props.module.pitchPoints}
        </ModuleDescription>
      </ModuleOfferingsBlock>
    </ModuleDetails>
  </StyledModuleCard>
);

export default ModuleCard;
