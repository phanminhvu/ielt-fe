export const useCheckRenderQuestion = ({ groupSelected, part, group, question, questions, handleSubmit }: any) => {
  const checkNextPartRender = () => {
    let sectionRender: any = {};
    let partLength = part.length - 1;
    let groupLength = group.length - 1;
    let questionLength = question.length - 1;
    //
    if (groupSelected.question < questionLength) {
      sectionRender.question = groupSelected.question + 1;
      return sectionRender;
    }
    if (groupSelected.group < groupLength) {
      sectionRender.group = groupSelected.group + 1;
      sectionRender.question = 0;
      return sectionRender;
    }
    if (groupSelected.part < partLength) {
      sectionRender.part = groupSelected.part + 1;
      sectionRender.group = 0;
      sectionRender.question = 0;
      return sectionRender;
    }
    // handleSubmit();
    return;
  };

  const checkBackRenderQuestion = () => {
    let sectionRender: any = {};

    if (groupSelected.question > 0) {
      sectionRender.question = groupSelected.question - 1;
      return sectionRender;
    }
    if (groupSelected.group > 0) {
      let questiongLength = questions[groupSelected.part]?.groups[groupSelected.group - 1]?.questions.length - 1;
      sectionRender.group = groupSelected.group - 1;
      sectionRender.question = questiongLength;
      return sectionRender;
    }

    if (groupSelected.part > 0) {
      let groupLength = questions[groupSelected.part - 1]?.groups?.length - 1;
      let questiongLength = questions[groupSelected.part - 1]?.groups[groupLength]?.questions.length - 1;

      sectionRender.part = groupSelected.part - 1;
      sectionRender.group = groupLength;
      sectionRender.question = questiongLength;
      return sectionRender;
    }

    return;
  };

  return { checkNextPartRender, checkBackRenderQuestion };
};
