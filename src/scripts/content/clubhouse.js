'use strict';

togglbutton.render('.story-state:not(.toggl)', { observe: true }, function (
  elem
) {
  const wrap = createTag('div');
  const element = elem;
  elem = elem.parentNode.parentNode.parentNode;

  const getDescription = function () {
    const permalink = $('.permalink', elem).value;
    return `ch${permalink.split('io/switchcase/story/')[1]}`;
  };

  const getProject = function () {
    return $('.story-epic .value', elem).textContent;
  };

  const link = togglbutton.createTimerLink({
    className: 'clubhouse',
    description: getDescription,
    projectName: getProject
  });

  wrap.className = 'attribute editable-attribute';
  wrap.appendChild(link);

  element.parentNode.insertBefore(wrap, element.nextSibling);
});
