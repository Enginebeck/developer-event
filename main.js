const container = document.getElementById('visualization');
const options = {
    verticalScroll: true,
    align: 'center',
    template: (item, element, data) => `<a href="${data.link}" class="event-link" target="_blank" title="${data.content}">${data.content}</a>`
};
data.forEach((item, index) => item.id = index);
new vis.Timeline(container, data, options);
