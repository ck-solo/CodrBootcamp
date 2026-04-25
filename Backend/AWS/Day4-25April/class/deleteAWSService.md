# AWS Cleanup Checklist

Use this checklist whenever your AWS credits are decreasing unexpectedly.

## 1. Delete ECS resources
Go to Amazon ECS and delete in this order:
- [ ] Services
- [ ] Running Tasks
- [ ] Cluster

---

## 2. Delete Load Balancer
Go to EC2 → Load Balancers and delete unused load balancers.
- [ ] Deleted Load Balancers

---

## 3. Terminate EC2 Instances
Go to EC2 → Instances
- [ ] Select running instances
- [ ] Instance State → Terminate

---

## 4. Delete NAT Gateway
Go to VPC → NAT Gateways
- [ ] Delete all NAT gateways

---

## 5. Delete EBS Volumes
Go to EC2 → Volumes
- [ ] Delete unused volumes

---

## 6. Delete Snapshots
Go to EC2 → Snapshots
- [ ] Delete old snapshots/backups

---

## 7. Delete ECR Repositories / Images
Go to Amazon ECR
- [ ] Delete repositories
or
- [ ] Delete images inside repositories

---

## 8. Delete RDS Databases
Go to Amazon RDS
- [ ] Delete databases
- [ ] Delete snapshots
- [ ] Delete automated backups

---

## 9. Check S3
Go to Amazon S3
- [ ] Delete buckets/files/logs/backups

---

## 10. Check CloudWatch Logs
Go to Amazon CloudWatch
- [ ] Delete log groups

---

## 11. Check Route 53
Go to Route 53
- [ ] Delete hosted zones/domains if unused

---

## 12. Check Lambda + API Gateway
- [ ] Delete Lambda functions
- [ ] Delete API Gateway APIs

---

## 13. Check All Regions
Repeat checks in:
- [ ] ap-south-1 (Mumbai)
- [ ] us-east-1 (N. Virginia)
- [ ] us-east-2 (Ohio)
- [ ] ap-southeast-1 (Singapore)

---

## 14. Optional Final Cleanup
Go to VPC → Your VPCs
- [ ] Delete VPC after everything else is deleted

---

## 15. Set Budget Alert
Go to AWS Budgets
- [ ] Set alert at $1 or $5