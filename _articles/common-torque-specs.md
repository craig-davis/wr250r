---
title: Common Torque Specs
sort: 6
---

<table class='table table-striped data-table' style='min-width:650px'>
	<thead>
		<tr>
			<th>Part</th>
			<th>Newton Meters</th>
			<th>Foot-Pounds</th>
			<th>Qty</th>
			<th>Size</th>
			<th>Thread<br/>Lock</th>
		</tr>
	</thead>
	<tbody>
		{% for spec in site.data.common-torque-specs %}
			<tr>
				<td>{{ spec.part }}</td>
				<td>{{ spec.nm }} Nm</td>
				<td>{{ spec.ftlb }} fb lb</td>
				<td>{{ spec.qty }}</td>
				<td>{{ spec.thread }}</td>
				<td>{{ spec.tl }}</td>
			</tr>
		{% endfor %}
	</tbody>
</table>

