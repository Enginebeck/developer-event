const container = document.getElementById('visualization');
const options = {
    verticalScroll: true,
    template: (item, element, data) => `<a href="${data.link}" target="_blank">${data.content}</a>`
};
data.forEach((item, index) => item.id = index);
new vis.Timeline(container, data, options);
